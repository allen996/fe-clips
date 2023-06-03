<script setup lang="ts">
import ClipsUnit from './ClipsUnit.vue'

defineProps<{
  links: any
}>()
</script>

<template>
  <div id="app-main">
    <ClipsUnit v-for="item in links" :key="item.menu" v-bind="item">
      <template #header>{{ item.menu }}</template>
    </ClipsUnit>
  </div>
</template>

<style scoped lang="scss">
#app-main {
  margin-left: 300px;
  margin-right: 30px;
  padding-top: 30px;
  padding-bottom: 200px;
}
</style>
