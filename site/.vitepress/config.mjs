import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '一人成队 · MAS',
  description: '由人统筹的多智能体协作系统：选择平台，从一件真实任务开始，直到成果核收。',
  lang: 'zh-CN',
  base: '/solo-to-team-skills/',
  cleanUrls: true,
  srcExclude: ['README.md', 'node_modules/**', 'scripts/**'],
  head: [['meta', { name: 'theme-color', content: '#1d6f67' }]],
  themeConfig: {
    siteTitle: '一人成队 MAS',
    nav: [
      { text: '开始使用', link: '/guide/start' },
      { text: '团队与协作', link: '/team' },
      { text: 'Skills与配置', link: '/generated/configuration' },
      { text: '验证与常见问题', link: '/guide/verification' }
    ],
    sidebar: [
      { text: '从这里开始', items: [
        { text: '选择平台与下载', link: '/guide/start' },
        { text: '收回第一份成果', link: '/guide/first-task' }
      ] },
      { text: '四个平台', items: [
        { text: 'Grok Bot', link: '/platforms/grok' },
        { text: 'WorkBuddy', link: '/platforms/workbuddy' },
        { text: 'DeepSeek Harness', link: '/platforms/deepseek' },
        { text: 'Open Master Bot', link: '/platforms/openmaus' }
      ] },
      { text: '理解与配置', items: [
        { text: '两张图看懂团队', link: '/team' },
        { text: '工程设计与闭环', link: '/engineering' },
        { text: '完整配置使用清单', link: '/generated/configuration' },
        { text: '原四款基础Skills', link: '/foundation' }
      ] },
      { text: '判断与继续', items: [
        { text: '已验证与未验证', link: '/guide/verification' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '维护、历史与参与', link: '/guide/maintainers' }
      ] }
    ],
    search: {
      provider: 'local',
      options: {
        miniSearch: { options: {
          tokenize: (text) => Array.from(new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text), part => part.segment).filter(part => /[\p{L}\p{N}]/u.test(part))
        } },
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清空搜索', backButtonTitle: '返回', displayDetails: '显示详细结果', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
        }
      }
    },
    outline: { level: [2, 3], label: '本页内容' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    sidebarMenuLabel: '浏览目录',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '回到顶部',
    socialLinks: [{ icon: 'github', link: 'https://github.com/dabingfy-dot/solo-to-team-skills' }],
    footer: { message: '项目自制材料按 MIT 与 NOTICE 所列范围使用。', copyright: '一人成队 · 文档与现有发布内容同步维护' }
  }
})
