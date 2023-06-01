<script lang="ts" setup>
import SideBar from '../components/SideBar.vue'
import ClipsUnit from '../components/ClipsUnit.vue'
import { useLinkStore } from '../stores/link'

const linkStore = useLinkStore()
</script>

<template>
  <SideBar />
  <main id="app-main">
    <ClipsUnit v-for="item in linkStore.link" :key="item.menu" v-bind="item">
      <template #header>{{ item.menu }}</template>
    </ClipsUnit>
  </main>
</template>

<style lang="scss" scoped>
#app-main {
  margin-left: 300px;
  margin-right: 30px;
  padding: 30px 0;
}
</style>
