<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SideBar from '../components/SideBar.vue'
import ClipsMain from '../components/ClipsMain.vue'
import ToCeiling from '../components/ToCeiling.vue'
import { useMenuStore } from '../stores/menu'
import { useLinkStore } from '../stores/link'

const menuStore = useMenuStore()
const linkStore = useLinkStore()

let current = ref(1)

function handleClipsScroll(id: number, menu: string): void {
  current.value = id
  const clips = document.getElementsByClassName('clips')
  for (const item of clips) {
    if (item.getAttributeNode('menu')?.value === menu) {
      setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}

let isToCeiling = ref(false)
function handleScroll(): void {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 360) {
    isToCeiling.value = true
  } else {
    isToCeiling.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <SideBar :menus="menuStore.menu" :current="current" @scroll="handleClipsScroll" />
  <ClipsMain :links="linkStore.link" />
  <ToCeiling v-show="isToCeiling" />
</template>

<style scoped lang="scss"></style>
