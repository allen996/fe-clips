<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'

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

const introText = ref('本项目旨在收录前端的各类资源，欢迎大佬踊跃补充！')
const typingText = ref('')
const index = ref(0)

watch(typingText, (newVal: string) => {
  if (newVal === introText.value) {
    setTimeout(() => {
      index.value = 0
      typingText.value = ''
      typingAnimation()
    }, 8000)
  }
})

function typingAnimation(): void {
  const speed = 600
  if (index.value < introText.value.length) {
    typingText.value += introText.value.charAt(index.value)
    index.value++
    setTimeout(typingAnimation, speed)
  }
}

onMounted(() => {
  setTimeout(() => {
    typingAnimation()
  }, 1000)
})
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
    <div class="intro">
      <p>{{ typingText }} <span class="caret"></span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app-sidebar {
  position: fixed;
  width: 270px;
  height: 100vh;
  background: #fff;
  text-align: center;
  padding: 30px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    h1 {
      font-family: system-ui;
    }
  }
  .menu {
    ul {
      padding: 15px 0;
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
          animation: menu 1.2s ease-out;
        }
        @keyframes menu {
          0% {
            transform: scale(0);
          }
          60% {
            transform: scale(1.1);
          }
          80% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
  .intro {
    margin: 10px 0;
    .caret {
      border-right: 3px solid #626aef;
      animation: caret 1.2s infinite;
    }
    @keyframes caret {
      50% {
        border-color: transparent;
      }
    }
  }
}
</style>
