<script setup lang="ts">
function handleBackTop(): void {
  ;(document.documentElement || document.body)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="back-top" title="回到顶部">
    <button @click="handleBackTop">
      <i class="iconfont icon-cc-top"></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
#back-top {
  position: fixed;
  bottom: 80px;
  right: 50px;
  button {
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: var(--fc-color-white);
    background: var(--fc-color-primary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
