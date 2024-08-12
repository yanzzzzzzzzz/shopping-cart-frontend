<template>
  <div class="bg-white mt-3 p-5">
    <div class="title">商品規格</div>
    <div class="pt-2 m-2">
      <div class="subtitle">
        <label class="spec-label">分類</label>
        <span>乳清蛋白</span>
      </div>
      <div class="subtitle">
        <label class="spec-label">商品數量</label>
        <span>2647</span>
      </div>
      <div class="subtitle">
        <label class="spec-label">品牌</label>
        <span>BODY GOALS</span>
      </div>
      <div class="subtitle">
        <label class="spec-label">產地</label>
        <span> 台灣</span>
      </div>
    </div>
    <div class="title">商品描述</div>
    <div class="pt-2 m-2">{{ product.describe }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const product = ref({
  describe: 'Body Goals 乳清蛋白飲 全素多效豌豆蛋白飲 31g',
});
</script>
<style scoped>
.spec-label {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.875rem;
  padding-right: 0.75rem;
  width: 8.75rem;
  display: inline-block;
}
.subtitle {
  margin-bottom: 1rem;
}
.title {
  font-size: 1.125rem;
  background-color: #fafafa;
  padding: 1rem 0.5rem;
}
</style>
