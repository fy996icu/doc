// vscode侧边栏
module.exports = [
  {
    text: 'VSCODE',
    link: '#vscode',
  },
  {
    text: '常用插件',
    link: '#常用插件',
  },
  {
    text: '我的vscode配置',
    link: '#我的vscode配置',
  },
  {
    text: '隐藏小功能',
    collapsible: false,
    children: [
      {
        text: '截屏模式',
        link: '#截屏模式',
      },
    ],
  },
  {
    text: '系统热键',
    collapsible: false,
    children: [
      {
        text: '基础编辑',
        link: '#基础编辑',
      },
      {
        text: '导航控制',
        link: '#导航控制',
      },
      {
        text: '搜索和替换',
        link: '#搜索和替换',
      },
      {
        text: '多光标和选择',
        link: '#多光标和选择',
      },
      {
        text: '语言编辑',
        link: '#语言编辑',
      },
      {
        text: '窗口管理',
        link: '#窗口管理',
      },
      {
        text: '文件管理',
        link: '#文件管理',
      },
      {
        text: '代码调试',
        link: '#代码调试',
      },
      {
        text: '集成终端',
        link: '#集成终端',
      },
    ],
  }
]