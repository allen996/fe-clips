<script lang="ts" setup>
defineProps<{
  menus: any
  current: any
}>()
const emits = defineEmits<{
  scroll: [id: number, menu: string]
}>()

function menuActive(id: number, menu: string): void {
  emits('scroll', id, menu)
}
</script>

<template>
  <div id="app-sidebar">
    <div class="logo">
      <i class="iconfont icon-clips-logo"></i>
      <h1>前端回形针</h1>
    </div>
    <nav class="menu">
      <ul>
        <li v-for="item in menus" :key="item.id" @click="menuActive(item.id, item.menu)">
          <a class="menu-item" :class="{ active: current === item.id }">{{ item.menu }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#app-sidebar {
  position: fixed;
  width: 270px;
  height: 100vh;
  background: #fff;
  text-align: center;
  .logo {
    margin: 30px 10px;
    h1 {
      display: inline-block;
      font-family: system-ui;
    }
  }
  .menu {
    ul {
      margin: 0 10%;
      padding: 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #a3a4ab;
      li {
        margin-bottom: 5px;
        .menu-item {
          display: block;
          width: 100%;
          height: 50px;
          line-height: 50px;
          border-radius: 15px;
          color: #a3a4ab;
          margin: 0 auto;
          &:not(.active):hover {
            color: #242629;
            background: #edeff6;
          }
        }
        .active {
          color: #fff;
          background: #626aef;
          animation: menu 1.2s ease;
        }
        @keyframes menu {
          0% {
            transform: scale(0);
          }
          75% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
}
</style>
