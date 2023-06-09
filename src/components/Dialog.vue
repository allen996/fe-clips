<script setup lang="ts"></script>

<template>
  <Teleport to="body">
    <div class="overlay">
      <div class="dialog">
        <header>
          <h3>选择共享资源的方式</h3>
          <button class="dialog-close" @click="">
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
  z-index: 9998;
  .dialog {
    width: 360px;
    height: 200px;
    text-align: center;
    background: var(--fc-background-color-1);
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 20px;
    button {
      border: none;
      outline: none;
      background-color: transparent;
    }
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
}
</style>
