<script lang="ts" setup>
const props = defineProps<{
  classify: any
}>()
</script>

<template>
  <div class="clips">
    <header>
      <h3><slot name="header"></slot></h3>
    </header>
    <section>
      <dl v-for="(item, index) in props.classify" :key="index">
        <dt>{{ item.label }}</dt>
        <dd v-for="(link, index) in item.link" :key="index">
          <a :href="link.url">{{ link.name }}</a>
        </dd>
      </dl>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.clips {
  width: 100%;
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  header {
    text-align: left;
    h3 {
      display: inline-block;
      border-bottom: 3px solid #626aef;
    }
  }
  section {
    border-bottom: 2px dashed #a3a4ab;
  }
}
</style>
