<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

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

const introText = ref('本项目旨在收录前端各类资源，期待大佬帮助补充！')
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
  const speed = 300
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

const check = ref(false)
function switchTheme(): void {
  check.value = !check.value
  if (check.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <nav id="sidebar">
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
    <div class="theme">
      <span class="text">外观</span>
      <button class="switch" :aria-checked="check" @click="switchTheme">
        <span class="switch-check" :class="{ dark: check }">
          <i class="iconfont icon-moon" v-if="check"></i>
          <i class="iconfont icon-sun" v-else></i>
        </span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#sidebar {
  position: fixed;
  width: 270px;
  height: 100vh;
  background: var(--fc-background-color-1);
  padding: 30px;

  .dark {
    transform: translateX(18px);
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    i {
      font-size: 35px;
    }
    h1 {
      font-family: system-ui;
    }
  }

  .menu {
    text-align: center;
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
    height: 50px;
    margin: 10px 0;
    .caret {
      border-right: 2px solid #626aef;
      animation: caret 1.2s infinite;
    }
    @keyframes caret {
      50% {
        border-color: transparent;
      }
    }
  }

  .theme {
    height: 48px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--fc-background-color-2);
    padding: 10px;
    .text {
      font-size: 12px;
    }
    .switch {
      position: relative;
      width: 40px;
      height: 22px;
      background-color: var(--fc-switch-bg);
      border: 1px solid var(--fc-border-color);
      border-radius: 15px;
      cursor: pointer;
      &:hover {
        border-color: var(--fc-border-color-hover);
      }
      .switch-check {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--fc-background-color-1);
        text-align: center;
        line-height: 18px;
        transition: transform 0.3s;
        i {
          font-size: 12px;
          color: var(--fc-text-color);
        }
      }
    }
  }
}
</style>

<style lang="scss">
.dark {
  .switch-check {
    transform: translateX(18px);
  }
}
</style>
