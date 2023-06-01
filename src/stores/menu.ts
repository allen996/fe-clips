import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menu = reactive([
    { id: 1, menu: '前端工具' },
    { id: 2, menu: '社区' },
    { id: 3, menu: '技术' },
    { id: 4, menu: '插件' },
    { id: 5, menu: '书籍' },
    { id: 6, menu: '设计' },
    { id: 7, menu: '应聘' },
    { id: 8, menu: '其他' }
  ])

  return { menu }
})
