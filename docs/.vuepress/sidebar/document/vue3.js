// vue3.x快速上手侧边栏
module.exports = [
  {
    text: '快速上手',
    collapsible: true,
    children: [
      "认识Vue3.md",
      "compositionApi.md",
      "生命周期钩子.md",
      "组合式API和选项式API对比.md",
      "setup.md",
      "provide与inject.md",
      "WebComponents.md",
      "getCurrentInstance.md",
      "Ref数组.md",
      "新的组件.md",
      "动态组件与异步组件.md",
      "被移除的api.md",
      "v-model的变更.md",
      "style特性.md",
    ],
  },
  {
    text: 'script setup',
    collapsible: true,
    children: [
      'script-setup.md',
      'setup-组件的使用.md',
      'setup-defineProps.md',
      'setup-defineEmits.md',
      'setup-defineExpose.md',
      'setup-useSlots和useAttrs.md',
      'setup-与script使用.md',
      'setup-顶层await.md',
      'setup-限制使用src导入.md',
      'setup-宏命令报错问题.md',
    ],
  }
]