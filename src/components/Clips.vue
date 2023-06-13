<script setup lang="ts">
import LinksUnit from './LinksUnit.vue'

defineProps<{
  links: any
}>()
</script>

<template>
  <main id="main">
    <LinksUnit v-for="item in links" :key="item.nav" v-bind="item">
      <template #header>{{ item.nav }}</template>
    </LinksUnit>
    <div class="placeholder">
      <img src="../assets/images/share_link.svg" alt="共享链接" />
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
