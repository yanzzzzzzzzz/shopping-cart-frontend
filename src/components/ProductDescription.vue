<template>
  <div class="bg-white p-5">
    <div class="title">商品描述</div>
    <div class="m-3" v-html="desc"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  desc: string | undefined;
}>();
</script>
<style scoped>
.title {
  font-size: 1.125rem;
  background-color: #fafafa;
  padding: 1rem 0.5rem;
}
</style>
