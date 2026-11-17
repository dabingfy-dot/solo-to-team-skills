# 文档站维护

本目录只增加导航与阅读层，已发布的 Skills、bundle.1、PDF、视频和验证原件不因建站改写或重新发布。

## 本地运行

使用 Node 22 或更新的受支持版本，进入 `site/`：

```sh
npm ci --ignore-scripts
npm run build
npm run preview
```

预览地址带仓库前缀 `/solo-to-team-skills/`。首次安装只是维护者构建站点的步骤，普通读者不用安装 Node 或 VitePress。

## 内容来源

- 手写页面只负责首页、连续上手导航和对现有机制的说明。
- `scripts/generate.mjs` 读取白名单里的已公开权威材料，生成 `generated/`，保留原正文和来源SHA；缺源立即失败。
- 生成目录不提交。每次构建重新生成，避免手改另一份完整正文。
- 原冻结材料的候选/未发布字样由当前身份提示解释，不改原 ZIP 字节。
- 包和PDF下载链接复用 v0.2.0 Release；封面和视频指向已存在的公开媒体。
- `public/diagrams/` 是已公开PDF第5、6页的整页栅格图；来源指纹和页码见同目录SOURCE.json。PDF更新时另核两图，不从内部图册取素材。

## 发布与回归

提交前构建并核对搜索、四平台链接、两张图、移动端与旧文件指纹。工作流只打包 `site/.vitepress/dist`，不把整仓、源码ZIP或内部项目记录发到Pages。

文档站发布与产品版本分开；改导航不移动 v0.2.0 标签，不重新发布原附件。README上的在线文档入口只在真实站点可访问后加入。
