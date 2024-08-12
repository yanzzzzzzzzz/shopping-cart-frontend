<template>
  <div class="bg-white mt-3 p-5">
    <div v-if="productData">
      <div class="title">商品規格</div>
      <div class="pt-2 m-2">
        <div
          v-for="(value, key) in productData.specs"
          :key="key"
          class="subtitle"
        >
          <label class="spec-label">{{ translations[key] }}</label>
          <span>{{ value }}</span>
        </div>
      </div>
      <div class="title">商品描述</div>
      <div class="pt-2 m-2">{{ productData.describe }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ProductData } from '@/Model/type';

const productData = ref<ProductData | null>(null);

const fetchProductData = async (productId: number) => {
  productData.value = {
    id: 1,
    name: 'Body Goals 乳清蛋白飲',
    describe: 'Body Goals 乳清蛋白飲 全素多效豌豆蛋白飲 31g',
    specs: {
      category: '乳清蛋白',
      quantity: '2647',
      brand: 'BODY GOALS',
      origin: '台灣',
    },
  };
};

onMounted(() => {
  fetchProductData(1);
});

const translations = {
  category: '分類',
  quantity: '商品數量',
  brand: '品牌',
  origin: '產地',
};
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
