module.exports = [
  {
    text:"常用资源",
    link:"/resources/"
  },
  {
    text:"框架插件",
    children:[
      {
        text:"UI框架",
        link:"/plugin/ui/"
      },
      {
        text:"常用插件",
        link:"/plugin/expand/"
      },
      {
        text:"字体图标",
        link:"/plugin/fonticon/"
      }
    ]
  },
  {
    text:"项目配置",
    children:[
      {
        text:"Vue项目配置",
        link:"/collocation/vue/"
      }
    ]
  },
  {
    text: '技术文档',
    children: [
      {
        text: 'React系列',
        children: [
          {
            text:'React',
            link:"/document/react/"
          },
          {
            text:'Redux',
            link:"/document/redux/"
          },
        ],
      },
      {
        text: 'Vue系列',
        children: [
          {
            text:'Vue3.x',
            link:"/document/vue3/"
          },
          {
            text:'Pinia',
            link:"/document/pinia/"
          },
        ],
      },
    ],
  },
  {
    text: '工具软件',
    children: [
      {
        text: '编程软件',
        children: [{
          text:'VSCODE',
          link:"/tools/vscode/"
        },
       ],
      },
      {
        text: '操作系统',
        children: [{
          text:'MAC',
          link:"/tools/mac/"
        },
       ],
      },
    ],
  },
]