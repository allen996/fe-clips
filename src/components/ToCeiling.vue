<script setup lang="ts">
function handleToCeiling(): void {
  ;(document.documentElement || document.body)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="to-ceiling" title="回到顶部">
    <button @click="handleToCeiling">↑</button>
  </div>
</template>

<style scoped lang="scss">
#to-ceiling {
  position: fixed;
  bottom: 80px;
  right: 50px;
  button {
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: #fff;
    background: #626aef;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
