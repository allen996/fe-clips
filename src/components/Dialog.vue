<script setup lang="ts">
import { reactive, ref } from 'vue'

const emits = defineEmits<{
  close: any
}>()
function close(): void {
  emits('close')
}

const showDropdown = ref(false)
const rotateObj = reactive({
  transform: 'rotate(0)',
  transition: 'transform 0.8s'
})
function handleSelectDropdown(): void {
  showDropdown.value = !showDropdown.value
  if (showDropdown.value) {
    rotateObj.transform = 'rotate(-0.5turn)'
  } else {
    rotateObj.transform = 'rotate(0)'
  }
}

const isShowEmail = ref(false)
function enterEmail(): void {
  isShowEmail.value = true
}
function cancelEmail(): void {
  isShowEmail.value = false
}
</script>

<template>
  <Teleport to="body">
    <div class="overlay" @click.self="close">
      <div class="dialog">
        <header>
          选择共享资源的方式
          <i class="iconfont icon-close" @click="close"></i>
        </header>
        <div class="content">
          <div class="way">
            <button id="email" @click="enterEmail">
              <i class="iconfont icon-clips-logo1"></i>
            </button>
            <span>邮箱</span>
          </div>
          <div class="way">
            <button id="github">
              <a href="https://github.com/allen996/fe-clips/issues" target="_blank">
                <i class="iconfont icon-github"></i>
              </a>
            </button>
            <span>github</span>
          </div>
        </div>
      </div>
      <div class="email" v-if="isShowEmail">
        <header>请输入您想要分享的资源</header>
        <form action="">
          <div class="name">
            <label for="">链接名</label>
            <input type="text" />
          </div>
          <div class="link">
            <label for="">链接地址</label>
            <input type="text" />
          </div>
          <div class="description">
            <label for="">描述</label>
            <input type="text" />
          </div>
          <div class="category">
            <label for="">类别</label>
            <div class="select">
              <div class="selector" @click="handleSelectDropdown">
                <input type="text" placeholder="请选择链接相应的类别" readonly />
                <i class="iconfont icon-downarrow1f" :style="rotateObj"></i>
              </div>
              <Transition name="dropdown">
                <ul class="options" v-show="showDropdown">
                  <li>111</li>
                  <li>222</li>
                  <li>333</li>
                  <li>333</li>
                  <li>333</li>
                  <li>333</li>
                  <li>333</li>
                </ul>
              </Transition>
            </div>
          </div>
        </form>
        <footer>
          <button @click="cancelEmail">取消</button>
          <button>确认</button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .dialog,
  .email {
    width: 50vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--fc-background-color-1);
    border-radius: 4px;
    z-index: 9999;

    header {
      margin: 20px 30px;
      font-size: 1.2rem;
    }

    footer {
      text-align: end;
      padding: 20px 50px 40px;
      button {
        padding: 5px 20px;
        border: 1px solid var(--fc-border-color);
        border-radius: 5px;
        cursor: pointer;
        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }

  .dialog {
    text-align: center;

    i {
      cursor: pointer;
      color: var(--fc-text-color);

      &.icon-close {
        font-size: 1.3rem;
        float: right;
        &:hover {
          color: var(--fc-color-primary);
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-evenly;
      padding: 30px 40px 50px;
      i {
        font-size: 2.5rem;
      }
      .way {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .email {
    caret-color: var(--fc-color-primary);

    form {
      padding: 20px 50px;
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        label {
          width: 20%;
          text-align: end;
          padding-right: 20px;
        }
        input,
        .select {
          width: 80%;
          line-height: 2rem;
          padding: 0 10px;
          border: 1px solid var(--fc-border-color);
          border-radius: 5px;
        }
        .select {
          position: relative;

          .selector {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            input {
              width: 100%;
              border: none;
              padding: 0;
              cursor: pointer;
            }
            i {
              margin-left: 10px;
            }
          }
          .options {
            position: absolute;
            top: 35px;
            left: 0;
            width: 100%;
            max-height: 200px;
            border-radius: 5px;
            background-color: var(--fc-background-color-1);
            box-shadow: 0 0 12px var(--fc-color-shadow);
            padding: 6px 20px 6px 10px;
            overflow: hidden;
            scrollbar-gutter: stable;
            z-index: 9999;
            &:hover {
              overflow: auto;
            }
            li {
              padding: 0 30px;
              border-radius: 5px;
              background-color: var(--fc-background-color-2);
              overflow: hidden;
              cursor: pointer;
              &:not(:last-child) {
                margin-bottom: 6px;
              }
            }
          }

          .dropdown-enter-active,
          .dropdown-leave-active {
            max-height: 200px;
            transition: max-height 0.6s ease-in, opacity 1s ease-in-out;
          }

          .dropdown-enter-from,
          .dropdown-leave-to {
            max-height: 0;
            opacity: 0;
            transition: opacity 0.8s ease, max-height 1s ease-out;
          }
        }
      }
    }
  }
}
</style>
