<script lang="ts" setup>
const props = defineProps<{
  classify: any
}>()
</script>

<template>
  <div class="clips">
    <header>
      <h3>
        <slot name="header">默认</slot>
      </h3>
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
            {{ link.name }}
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
    h3 {
      display: inline-block;
      font-size: 20px;
      border-left: 4px solid #626aef;
      // border-radius: 15px;
      padding-left: 20px;
      padding-right: 40px;
      background: linear-gradient(var(--fc-gradient));
      cursor: pointer;
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
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 20px 10px;
      grid-auto-rows: 100px;
      .link {
        font-size: 18px;
        color: var(--fc-text-color);
        background: var(--fc-background-color-2);
        border-radius: 10px;
        padding: 15px 20px;
        transition: all 1s;
        &:hover {
          color: #fff;
          background: #626aef;
          transform: scale(1.06);
        }
      }
    }
  }
}
</style>
