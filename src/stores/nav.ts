import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  const nav = reactive([
    { id: 1, nav: '前端工具' },
    { id: 2, nav: '社区' },
    { id: 3, nav: '技术' },
    { id: 4, nav: '插件' },
    { id: 5, nav: '书籍' },
    { id: 6, nav: '设计' },
    { id: 7, nav: '应聘' },
    { id: 8, nav: '其他' }
  ])

  return { nav }
})
