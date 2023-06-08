<script setup lang="ts">
import ClipsUnit from './ClipsUnit.vue'

defineProps<{
  links: any
}>()
</script>

<template>
  <main id="main">
    <ClipsUnit v-for="item in links" :key="item.menu" v-bind="item">
      <template #header>{{ item.menu }}</template>
    </ClipsUnit>
    <div class="placeholder">
      <div class="placeholder-bg"></div>
      <img src="../assets/images/share_link.svg" alt="" />
    </div>
  </main>
</template>

<style scoped lang="scss">
#main {
  padding: 30px 30px 30px 300px;
  background-color: var(--fc-background-color-2);
  .placeholder {
    width: 100%;
    padding: 30px 0;
    img {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
