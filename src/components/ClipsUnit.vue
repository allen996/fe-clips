<script lang="ts" setup>
const props = defineProps<{
  classify: any
}>()
</script>

<template>
  <div class="clips">
    <header>
      <h2>
        <slot name="header">默认</slot>
      </h2>
      <i class="iconfont icon-link2"></i>
    </header>
    <div class="clips-list" v-for="(item, index) in props.classify" :key="index">
      <div class="clips-list-label">{{ item.label }}</div>
      <div class="clips-list-item">
        <a
          class="link"
          v-for="(link, index) in item.link"
          :key="index"
          :href="link.url"
          target="_blank"
        >
          <div class="card">
            <h3>
              {{ link.name }}
            </h3>
            <p>面向前端设计人员和开发人员的社交开发环境</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clips {
  width: 100%;
  background: var(--fc-background-color-1);
  padding: 40px;
  border-radius: 15px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  header {
    text-align: left;
    margin-bottom: 10px;
    position: relative;
    i {
      display: none;
      position: absolute;
      color: #626aef;
      font-size: 20px;
    }
    h2 {
      display: inline-block;
      font-size: 20px;
      color: var(--fc-heading-color);
      border-left: 10px solid #626aef;
      padding-left: 30px;
      padding-right: 40px;
      background: linear-gradient(var(--fc-gradient));
      cursor: pointer;
      clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);
    }
    &:hover {
      i {
        display: inline-block;
      }
    }
  }
  .clips-list {
    border-bottom: 2px dashed #a3a4ab;
    padding-bottom: 10px;
    .clips-list-label {
      font-size: 16px;
      margin: 10px 0;
    }
    .clips-list-item {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 20px 10px;
      grid-auto-rows: 100px;
      .link {
        color: var(--fc-text-color);
        background: var(--fc-background-color-2);
        border-radius: 10px;
        .card {
          padding: 15px 20px;
          &:hover {
            h3 {
              color: var(--fc-color-primary);
              &::before {
                transform: translate(-50%, 0) scaleX(1);
              }
            }
          }
          h3 {
            display: inline-block;
            font-size: 1.125rem;
            margin-bottom: 15px;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 100%;
              height: 2px;
              background-color: var(--fc-color-primary);
              transform-origin: center;
              transform: translate(-50%, 0) scaleX(0);
              transition: transform 0.3s ease-in-out;
            }
          }
          p {
            font-size: 0.875rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
