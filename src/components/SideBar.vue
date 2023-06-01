<script lang="ts" setup>
import { ref } from 'vue'
import { useMenuStore } from '../stores/menu'

const menuStore = useMenuStore()
let current = ref(1)
function menuActive(id: number): void {
  current = ref(id)
}
console.log(current)
</script>

<template>
  <div id="app-sidebar">
    <div class="logo">
      <i class="iconfont icon-clips-logo"></i>
      <h1>前端回形针</h1>
    </div>
    <nav class="menu">
      <ul>
        <li v-for="item in menuStore.menu" :key="item.id" @click="menuActive(item.id)">
          <a class="menu-item" :class="{ active: current === item.id }" href="#">{{ item.menu }}</a>
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
    border: 5px dotted #626aef;
    border-radius: 30px;
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
          &:hover {
            color: #242629;
            background: #edeff6;
          }
        }
        .active {
          color: #fff;
          background: #626aef;
          transition: all 1s;
          &:hover {
            transform: scale(1.1);
            color: #242629;
            background: #626aef;
          }
        }
      }
    }
  }
}
</style>
