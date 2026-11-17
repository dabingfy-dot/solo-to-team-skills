#!/usr/bin/env node
/**
 * Generate the documentation reference view from an explicit public-source allowlist.
 * No dependencies, network, package mutation or binary copying. Run from any directory:
 *   node site/scripts/generate.mjs
 *   node site/scripts/generate.mjs --check
 * Generated Markdown and manifest.json belong in .gitignore, not in source control.
 */
import { readFile, writeFile, mkdir, stat, realpath, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const outputRoot = path.join(root, 'site/generated');
const repository = 'https://github.com/dabingfy-dot/solo-to-team-skills';
// The current projection deliberately retains the already published source baseline.
// Change this pin only with a deliberate source-version update, not on each site build.
const sourceRef = '9ad57bae229b49a21c09e955373ec47126b7460d';
const release = `${repository}/releases/tag/v0.2.0`;
const checkOnly = process.argv.includes('--check');
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const encodePath = value => value.split('/').map(encodeURIComponent).join('/');
const sourceUrl = source => `${repository}/blob/${sourceRef}/${encodePath(source)}`;
const rawUrl = source => `https://raw.githubusercontent.com/dabingfy-dot/solo-to-team-skills/${sourceRef}/${encodePath(source)}`;
const pages = [];
const add = (source, route, title, kind = 'markdown') => pages.push({ source, route, title, kind });
const platforms = [['grok', 'Grok Bot'], ['workbuddy', 'WorkBuddy'], ['deepseek', 'DeepSeek Harness'], ['openmaus', 'Open Master Bot']];

for (const [slug, label] of platforms) {
  const base = `bundles/bundle1/packages/Solo-to-Team-${slug}-bundle1`;
  for (const [file, name, title, kind] of [
    ['START-HERE.md', 'start', '从这里开始'],
    ['platform/开始使用.md', 'adopt', '平台采用步骤'],
    ['docs/首次使用检查.md', 'first-check', '首次使用检查'],
    ['开工文本.txt', 'prompt', '可复制开工文本', 'text'],
    ['docs/配置使用清单.md', 'configuration', '配置使用清单'],
    ['docs/验证范围.md', 'verification', '验证范围'],
    ['docs/采用与退出.md', 'exit', '更新与退出'],
    ['docs/历史平台证据.md', 'history', '历史平台证据'],
  ]) add(`${base}/${file}`, `platforms/${slug}/${name}`, `${label} · ${title}`, kind);
}

add('bundles/bundle1/配置使用清单.md', 'configuration', '四平台配置使用清单');
const skillNames = [
  ['dispatch-accept-verify', '派出去的活要收回来'],
  ['evidence-before-done', '交活前要有证据'],
  ['beginner-ops-writing', '新手操作说明'],
  ['ops-case-notes', '脱敏运营记录'],
];
for (const [name, title] of skillNames) add(`skills/${name}/SKILL.md`, `skills/${name}`, `${title} · ${name}`);
for (const [name, title] of [
  ['grok-doc1-readback', 'Grok doc1 正文与清单读回'],
  ['grok-complete-input-r2', 'Grok 完整输入续测'],
  ['feedback-revision-doc1', '朋友反馈修订与证据边界'],
  ['handoff', '交接表退修案例'],
  ['01-intake', '活动任务初始材料'],
  ['02-change', '活动任务变更材料'],
]) add(`mas/evidence/${name}.md`, `evidence/${name}`, title);
add('bundles/bundle1/source/README.md', 'maintenance/bundle-build', '四完整包的维护与重建');
add('mas/source/README.md', 'maintenance/mas-build', '历史 MAS 工具源码说明');
add('RELEASE-NOTES.md', 'maintenance/release-notes', 'v0.2.0 发布说明');

const routes = new Map(pages.map(page => [page.source, `/generated/${page.route}.md`]));
const assets = new Map(platforms.map(([slug]) => [
  `bundles/bundle1/packages/Solo-to-Team-${slug}-bundle1.zip`,
  `${repository}/releases/download/v0.2.0/Solo-to-Team-${slug}-bundle1.zip`,
]));
assets.set('bundles/bundle1/Solo-to-Team-bundle1-packaging-source.zip', `${repository}/releases/download/v0.2.0/Solo-to-Team-bundle1-packaging-source.zip`);
assets.set('bundles/bundle1/pdf/一人成队_MAS工程与组织设计_v3_完整包与配置.pdf', `${repository}/releases/download/v0.2.0/Solo-to-Team-MAS-guide-zh.pdf`);
const binary = /\.(?:zip|pdf|mp4|png|webp|jpe?g|gif|svg|ico|woff2?|ttf)$/i;
const linkRecords = [];
const sourceCache = new Map();

function requireContained(absolute) {
  const relative = path.relative(root, absolute);
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`Source path escapes repository: ${absolute}`);
  }
  return relative.split(path.sep).join('/');
}

async function requirePublicPath(relative) {
  const absolute = path.resolve(root, relative);
  requireContained(absolute);
  const resolved = await realpath(absolute); // Fail on missing source or link target.
  requireContained(resolved); // Do not follow a symlink out of the public source tree.
  const canonical = requireContained(absolute);
  if (canonical.split('/').some(part => ['.git', '.agents', '.codex', 'node_modules'].includes(part))) {
    throw new Error(`Non-public source path: ${canonical}`);
  }
  return { absolute, info: await stat(absolute), canonical };
}

async function loadSource(source) {
  if (sourceCache.has(source)) return sourceCache.get(source);
  const { absolute, info } = await requirePublicPath(source);
  if (!info.isFile()) throw new Error(`Expected source file: ${source}`);
  const bytes = await readFile(absolute);
  const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  if (!text.trim()) throw new Error(`Empty source file: ${source}`);
  const loaded = { bytes, text, sha256: sha256(bytes) };
  sourceCache.set(source, loaded);
  return loaded;
}

async function destination(url, source, image) {
  if (!url || url.startsWith('#')) return url;
  if (/^(?:https?:|mailto:|tel:)/i.test(url)) return url;
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) throw new Error(`Unsupported link protocol in ${source}: ${url}`);
  const match = url.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  if (!match) throw new Error(`Cannot parse link in ${source}: ${url}`);
  const decoded = decodeURIComponent(match[1]);
  const absolute = path.resolve(path.dirname(path.join(root, source)), decoded);
  const relative = requireContained(absolute);
  const target = await requirePublicPath(relative);
  const anchor = match[3] || '';
  let result;
  if (routes.has(relative) && !image) result = `${routes.get(relative)}${anchor}`;
  else if (assets.has(relative) && !image) result = `${assets.get(relative)}${anchor}`;
  else if (image || binary.test(relative)) result = `${rawUrl(relative)}${anchor}`;
  else if (target.info.isDirectory()) result = `${repository}/tree/${sourceRef}/${encodePath(relative)}${anchor}`;
  else result = `${sourceUrl(relative)}${anchor}`;
  // Query flags such as ?raw=true belong to the old transport. The chosen target
  // already selects a readable page, raw asset or Release download explicitly.
  linkRecords.push({ source, original: url, target: relative, projected: result });
  return result;
}

async function rewriteLine(line, source) {
  // Inline code contains examples rather than active links. Keep it verbatim.
  const pieces = line.split(/(`+[^`]*`+)/g);
  for (let index = 0; index < pieces.length; index += 2) {
    let input = pieces[index], rendered = '', cursor = 0;
    const inline = /(!?\[[^\]\n]*\]\()(<[^>\n]*>|[^\s)]+)((?:\s+"[^"\n]*"|\s+'[^'\n]*')?\))/g;
    for (const match of input.matchAll(inline)) {
      rendered += input.slice(cursor, match.index);
      const url = match[2].startsWith('<') ? match[2].slice(1, -1) : match[2];
      const mapped = await destination(url, source, match[1].startsWith('!'));
      rendered += `${match[1]}${mapped}${match[3]}`;
      cursor = match.index + match[0].length;
    }
    pieces[index] = rendered + input.slice(cursor);
  }
  let result = pieces.join('');
  const reference = result.match(/^(\s{0,3}\[[^\]]+\]:\s*)(<[^>]+>|\S+)(.*)$/);
  if (reference) {
    const url = reference[2].startsWith('<') ? reference[2].slice(1, -1) : reference[2];
    result = `${reference[1]}${await destination(url, source, false)}${reference[3]}`;
  }
  return result;
}

async function rewriteMarkdown(text, source) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const marker = lines[i].match(/^ {0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = { char: marker[1][0], length: marker[1].length };
      else if (marker[1][0] === fence.char && marker[1].length >= fence.length) fence = null;
      continue;
    }
    if (!fence) lines[i] = await rewriteLine(lines[i], source);
  }
  return lines.join('\n');
}

function banner() {
  return `::: info 当前版本与原始材料\n这是 **v0.2.0 在线采用说明**中的原文参考页。正文里的“候选”“未正式发布”描述冻结时的历史状态；当前公开版已发布，但原有验证范围没有因此扩大。下载、第一次采用以本站导览和[正式 Release](${release})为入口。下方正文由既有公开文件生成，不覆盖原件或重新打包。\n:::\n`;
}

function frontmatter(title) {
  return `---\ntitle: ${JSON.stringify(title)}\noutline: [2, 3]\n---\n\n`;
}

function fenceText(text, language) {
  const longest = Math.max(0, ...Array.from(text.matchAll(/`+/g), m => m[0].length));
  const fence = '`'.repeat(Math.max(3, longest + 1));
  return `${fence}${language}\n${text.trimEnd()}\n${fence}\n`;
}

function exposeSourceFrontmatter(text) {
  const found = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!found) return text;
  return `**原文件的技能元数据**\n\n${fenceText(found[1], 'yaml')}\n${text.slice(found[0].length)}`;
}

async function generate() {
  if (new Set(pages.map(page => page.route)).size !== pages.length) throw new Error('Duplicate generated route');
  // Read every required source first. A missing file never produces an empty page.
  for (const page of pages) await loadSource(page.source);
  const rendered = new Map();
  const manifestPages = [];
  for (const page of pages) {
    const loaded = await loadSource(page.source);
    let body = page.kind === 'text' ? fenceText(loaded.text, 'text') : await rewriteMarkdown(exposeSourceFrontmatter(loaded.text), page.source);
    const content = `${frontmatter(page.title)}# ${page.title}\n\n${banner()}\n[查看公开原文件](${sourceUrl(page.source)})\n\n<details>\n<summary>来源与文件校验</summary>\n\n来源：\`${page.source}\`  \nSHA-256：\`${loaded.sha256}\`  \n公开基线：\`${sourceRef}\`\n\n</details>\n\n---\n\n${body.trimEnd()}\n`;
    rendered.set(`${page.route}.md`, content);
    manifestPages.push({ route: `/generated/${page.route}`, file: `${page.route}.md`, title: page.title, source: page.source, source_sha256: loaded.sha256, output_sha256: sha256(content), kind: page.kind });
  }
  for (const [route, title, selected] of [
    ['platforms/index', '四平台采用参考', pages.filter(p => p.route.startsWith('platforms/'))],
    ['skills/index', '四款基础 Skills 正文', pages.filter(p => p.route.startsWith('skills/'))],
    ['evidence/index', '案例与验证原文', pages.filter(p => p.route.startsWith('evidence/'))],
    ['maintenance/index', '维护与发布原文', pages.filter(p => p.route.startsWith('maintenance/'))],
    ['index', '公开材料参考索引', pages],
  ]) {
    const sourceList = selected.map(p => ({ path: p.source, sha256: sourceCache.get(p.source).sha256 }));
    const combinedHash = sha256(JSON.stringify(sourceList));
    const items = selected.map(p => `- [${p.title}](/generated/${p.route}.md) — 来源：\`${p.source}\``).join('\n');
    const content = `${frontmatter(title)}# ${title}\n\n${banner()}\n${items}\n\n来源清单 SHA-256：\`${combinedHash}\`。单页显示各自源文件指纹；所有来源均为白名单内的公开文件。\n`;
    rendered.set(`${route}.md`, content);
    manifestPages.push({ route: `/generated/${route}`, file: `${route}.md`, title, sources: sourceList, source_list_sha256: combinedHash, output_sha256: sha256(content), kind: 'index' });
  }
  const manifest = {
    schema: 1,
    generator: 'site/scripts/generate.mjs',
    source_ref: sourceRef,
    public_release: 'v0.2.0',
    source_count: sourceCache.size,
    page_count: manifestPages.length,
    source_policy: 'Explicit public file allowlist; no archive/media copying; source files remain unchanged.',
    transformations: ['rewrite active Markdown links', 'expose source YAML as a code block', 'add current release context and source hash'],
    pages: manifestPages,
    rewritten_links: linkRecords,
  };
  rendered.set('manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
  // Confirm that active internal links can only target known generated outputs.
  for (const link of linkRecords) {
    if (link.projected.startsWith('/generated/')) {
      const target = link.projected.slice('/generated/'.length).split('#')[0];
      if (!rendered.has(target)) throw new Error(`Unresolved generated link: ${link.projected}`);
    }
  }
  if (checkOnly) {
    for (const [relative, content] of rendered) {
      const actual = await readFile(path.join(outputRoot, relative), 'utf8');
      if (actual !== content) throw new Error(`Generated file differs: ${relative}; run generate.mjs`);
    }
  } else {
    // Only remove files owned by a previous invocation, never arbitrary site content.
    let prior = null;
    try { prior = JSON.parse(await readFile(path.join(outputRoot, 'manifest.json'), 'utf8')); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (prior?.generator === 'site/scripts/generate.mjs') {
      for (const page of prior.pages ?? []) {
        if (typeof page.file !== 'string' || page.file.includes('..') || path.isAbsolute(page.file)) throw new Error('Unsafe old generated path');
        if (!rendered.has(page.file)) await unlink(path.join(outputRoot, page.file));
      }
    }
    for (const [relative, content] of rendered) {
      const dest = path.join(outputRoot, relative);
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, content);
    }
  }
  // Source hashes after writing guarantee the generator never modifies its input.
  for (const [source, loaded] of sourceCache) {
    if (sha256(await readFile(path.join(root, source))) !== loaded.sha256) throw new Error(`Source changed during generation: ${source}`);
  }
  console.log(`${checkOnly ? 'Verified' : 'Generated'} ${manifest.page_count} reference pages from ${manifest.source_count} public files; ${linkRecords.length} local links mapped; no binary copied.`);
}

generate().catch(error => { console.error(`Documentation projection failed: ${error.message}`); process.exitCode = 1; });
