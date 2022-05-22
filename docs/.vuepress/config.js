const { path } = require('@vuepress/utils')
// 导航栏
const navbar = require('./navbar/navbar')
// 侧边栏
const {
  home,
  plugin_ui,
  plugin_expand,
  plugin_fonticon,
  collocation_vue,
  document_vue3, 
  document_react, 
  document_redux,
  document_pinia,
  tools_vscode,
  tools_mac,
  resources
} = require('./sidebar/index')
module.exports = {
  base: "/blog/",
  lang: 'zh-CN',
  dest: "./dist",
  title: '长方体混泥土瞬间移动师',
  description: '这是我收集整理的一些技术文档',
  themeConfig: {
    repoLabel:"GitHub",
    repo: 'https://gitee.com/fy0829/doc.git',
    logo: 'http://huaxhe.gitee.io/vue3_study_docs/images/vue3_logo.png',
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
    editLink: false,
    navbar,
    sidebar: {
      '/home': home,
      '/plugin/ui/': plugin_ui,
      '/plugin/expand/': plugin_expand,
      '/plugin/fonticon/': plugin_fonticon,
      '/collocation/vue/': collocation_vue,
      '/document/react/': document_react,
      '/document/redux/': document_redux,
      '/document/vue3/': document_vue3,
      '/document/pinia/': document_pinia,
      '/tools/vscode/': tools_vscode,
      '/tools/mac/': tools_mac,
      '/resources/': resources,
    },
  },
  plugins: [
    [
      '@vuepress/plugin-register-components',
        {
            componentsDir: path.resolve(__dirname, './components')
        },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
}