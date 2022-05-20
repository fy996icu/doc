// home侧边栏
module.exports = [
  {
    text: '勤劳的文档搬运工',
    link: '#勤劳的文档搬运工'
  },
  {
    text: '框架插件',
    collapsible: false,
    children: [
      {
        text: 'UI框架',
        link: '/plugin/ui/',
      },
      {
        text: '常用插件',
        link: '/plugin/expand/',
      },
      {
        text: '字体图标',
        link: '/plugin/fonticon/',
      },
    ],
  },
  {
    text: '项目配置',
    collapsible: false,
    children: [
      {
        text: 'Vue项目配置',
        link: '/collocation/vue/',
      },
    ],
  },
  {
    text: '技术文档',
    collapsible: false,
    children: [
      {
        text: 'React',
        link: '/document/react/',
      },
      {
        text: 'Redux',
        link: '/document/redux/',
      },
      {
        text: 'Vue3.x',
        link: '/document/vue3/',
      },
      {
        text: 'Pinia',
        link: '/document/pinia/',
      },
    ],
  },
  {
    text: '工具软件',
    collapsible: false,
    children: [
      {
        text: 'VSCODE',
        link: '/tools/vscode/',
      },
      {
        text: 'MAC使用技巧',
        link: '/tools/mac/',
      },
    ],
  },
]