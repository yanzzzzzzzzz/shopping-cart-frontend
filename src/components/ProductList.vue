<template>
  <div class="product-list">
    <div class="sort-bar">
      <button>綜合排序</button>
      <button>新品</button>
      <button>價格</button>
    </div>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';

const products = [
  { id: 1, name: 'iPhone 12 Pro Max', price: 490000 },
  { id: 2, name: 'OPPO RENO4Z', price: 1300 },
  // 更多產品資料
];
</script>

<style scoped>
.product-list {
  flex: 1;
  padding: 20px;
}

.sort-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
