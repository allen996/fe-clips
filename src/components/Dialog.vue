<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const emits = defineEmits<{
  close: any
}>()
function close(): void {
  emits('close')
}

const emailFormData = reactive({
  name: '',
  link: '',
  description: '',
  category: ''
})

const isNameValid = computed(() => {
  if (!shouldValid.value) {
    return false
  }
  return emailFormData.name.trim().length > 0
})
const isLinkValid = computed(() => {
  if (!shouldValid.value) {
    return false
  }
  return emailFormData.link.trim().length > 0
})
const isCategoryValid = computed(() => {
  if (!shouldValid.value) {
    return false
  }
  return emailFormData.category.trim().length > 0
})

const optionsList = reactive(['111', '222', '333', 'aaa', 'bbb', 'ccc'])

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

function handleSeleted(e: MouseEvent): void {
  const target = e.target as HTMLElement

  if (target.tagName === 'LI') {
    emailFormData.category = target.textContent!
    handleSelectDropdown()
  }
}

const shouldValid = ref(false)
function submitEmailForm(e: Event): void {
  e.preventDefault()
  shouldValid.value = true

  if (!isNameValid.value || !isLinkValid.value || !isCategoryValid.value) return
  const data = {
    name: emailFormData.name,
    link: emailFormData.link,
    description: emailFormData.description,
    category: emailFormData.category
  }
  emailFormData.name = ''
  emailFormData.link = ''
  emailFormData.description = ''
  emailFormData.category = ''
  console.log(data)
  shouldValid.value = false
  isShowEmail.value = false
}
</script>

<template>
  <Teleport to="body">
    <div class="overlay" @click.self="close">
      <Transition name="dialog">
        <div class="dialog" v-if="!isShowEmail">
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
      </Transition>
      <Transition name="email">
        <div class="email" v-if="isShowEmail">
          <header>请输入您想要分享的资源</header>
          <form @submit="submitEmailForm">
            <div class="form-content">
              <div class="name">
                <label for="name">链接名</label>
                <div class="input">
                  <input type="text" id="name" v-model="emailFormData.name" autocomplete="off" />
                  <div class="error-valid" v-if="shouldValid && !isNameValid">请输入链接名!</div>
                </div>
              </div>
              <div class="link">
                <label for="link">链接地址</label>
                <div class="input">
                  <input type="text" id="link" v-model="emailFormData.link" autocomplete="off" />
                  <div class="error-valid" v-if="shouldValid && !isLinkValid">请输入链接地址!</div>
                </div>
              </div>
              <div class="description">
                <label for="description">描述</label>
                <div class="input">
                  <input
                    type="text"
                    id="description"
                    v-model="emailFormData.description"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="category">
                <label for="category">类别</label>
                <div class="select">
                  <div class="selector" @click="handleSelectDropdown">
                    <input
                      type="text"
                      placeholder="请选择链接相应的类别"
                      readonly
                      v-model="emailFormData.category"
                      id="category"
                    />
                    <i class="iconfont icon-downarrow1f" :style="rotateObj"></i>
                  </div>
                  <div class="error-valid" v-if="shouldValid && !isCategoryValid">
                    请选择链接相应的类别!
                  </div>

                  <Transition name="dropdown">
                    <ul class="options" v-show="showDropdown" @click="handleSeleted">
                      <li
                        v-for="(item, index) in optionsList"
                        :key="index"
                        :class="item === emailFormData.category ? 'selected' : ''"
                        :value="item"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
            </div>
            <footer>
              <button @click="cancelEmail">取消</button>
              <button type="submit">确认</button>
            </footer>
          </form>
        </div>
      </Transition>
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

  .dialog-enter-active,
  .email-enter-active {
    animation: scaling 0.5s;
  }
  .dialog-leave-active,
  .email-leave-active {
    animation: scaling 0.5s reverse;
  }

  @keyframes scaling {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .dialog,
  .email {
    width: 50vw;
    height: fit-content;
    position: absolute;
    inset: 0;
    margin: auto;
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

    .error-valid {
      color: red;
      font-size: 0.75rem;
      line-height: 1;
      position: absolute;
      margin-top: 5px;
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

    .form-content {
      padding: 20px 50px 20px 30px;

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        label {
          width: 20%;
          text-align: end;
          padding-right: 20px;
          &:not([for='description'])::before {
            content: '*';
            color: red;
            margin-right: 4px;
          }
        }

        .input,
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
              overflow: hidden;
              cursor: pointer;
              &:hover {
                background-color: var(--fc-background-color-2);
              }
              &.selected {
                color: var(--fc-color-primary);
                font-weight: bold;
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
