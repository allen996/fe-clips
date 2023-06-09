<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SideBar from '../components/SideBar.vue'
import Clips from '../components/Clips.vue'
import BackTop from '../components/BackTop.vue'
import { useNavStore } from '../stores/nav'
import { useLinkStore } from '../stores/link'

const navStore = useNavStore()
const linkStore = useLinkStore()

let current = ref(1)

/* 点击导航滚动到对应的区域 */
function handleLinksScroll(nav: string): void {
  const links = document.querySelectorAll('.links')
  for (const item of links) {
    if (item.getAttributeNode('nav')?.value === nav) {
      setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth' })
        /* 去掉当前导航标识变更让动画过渡更丝滑 */
        // current.value = id
      })
    }
  }
}

/* 链接列表项出现在视口时对应导航跳转 */
function handleNavSkip(): void {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const initnav = entry.target.textContent
          for (const i of navStore.nav) {
            if (i.nav === initnav) {
              current.value = i.id
            }
          }
        }
      })
    },
    {
      rootMargin: '0px 0px -70% 0px'
    }
  )

  // 声明观察的对象
  const nav = document.querySelectorAll('.links header')
  nav.forEach((el) => {
    intersectionObserver.observe(el)
  })
}

/* 回到顶部 */
let isToCeiling = ref(false)
function handleBackTopScroll(): void {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 660) {
    isToCeiling.value = true
  } else {
    isToCeiling.value = false
  }
}

onMounted(() => {
  handleNavSkip()
  window.addEventListener('scroll', () => {
    handleBackTopScroll()
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleBackTopScroll)
})
</script>

<template>
  <SideBar :navs="navStore.nav" :current="current" @scroll="handleLinksScroll" />
  <Clips :links="linkStore.link" />
  <BackTop v-show="isToCeiling" />
</template>

<style scoped lang="scss"></style>
