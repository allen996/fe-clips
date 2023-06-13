<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  close: any
}>()
function close(): void {
  emits('close')
}

const showDropdown = ref(false)
function handleSelectDropdown(): void {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <Teleport to="body">
    <div class="overlay" @click.self="close">
      <div class="dialog" v-if="false">
        <header>
          <h3>选择共享资源的方式</h3>
          <button class="dialog-close" @click="close">
            <i class="iconfont icon-close"></i>
          </button>
        </header>
        <div class="content">
          <div class="way">
            <button id="email">
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
      <div class="form" v-else>
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
                <i class="iconfont icon-downarrow1f"></i>
              </div>
              <ul class="options" v-show="showDropdown">
                <li>111</li>
                <li>222</li>
                <li>333</li>
              </ul>
            </div>
          </div>
        </form>
        <footer>
          <button>取消</button>
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
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--fc-background-color-1);
    border-radius: 4px;
    z-index: 9999;
  }

  .dialog {
    width: 360px;
    height: 200px;
    text-align: center;

    i {
      cursor: pointer;
      color: var(--fc-text-color);
    }
    header {
      margin-bottom: 20px;
      position: relative;
      i {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.3rem;
        &:hover {
          color: var(--fc-color-primary);
        }
      }
    }
    .content {
      display: flex;
      justify-content: space-evenly;
      i {
        font-size: 2.5rem;
      }
      .way {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .form {
    width: 50%;
    caret-color: var(--fc-color-primary);
    header {
      margin: 20px;
      font-size: 1.2rem;
    }
    footer {
      text-align: end;
      padding: 20px 40px 40px;
      button {
        padding: 5px 20px;
        border: 1px solid var(--fc-border-color);
        border-radius: 5px;
        &:last-child {
          margin-left: 10px;
        }
      }
    }
    form {
      padding: 20px 40px;
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
            border-radius: 5px;
            background-color: var(--fc-background-color-1);
            box-shadow: 0 0 12px var(--fc-color-shadow);
            padding: 6px 0;
            z-index: 9999;
            li {
              padding: 0 30px;
            }
          }
        }
      }
    }
  }
}
</style>
