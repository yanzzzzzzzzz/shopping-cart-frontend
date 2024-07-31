<template>
  <div class="product-list">
    <div class="sort-bar">
      <Button label="綜合排名" />
      <Button label="最新" />
      <Button label="最熱銷" />
    </div>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="product-item"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Button from 'primevue/button';
const products = [
  {
    id: 1,
    name: 'iPhone 12 Pro Max',
    price: 490000,
    description: '這是商品1的描述',
  },
  {
    id: 2,
    name: 'OPPO RENO4Z',
    price: 1300,
    description: '這是商品2的描述',
  },
  {
    id: 3,
    name: 'iPhone 12 Pro Max',
    price: 490000,
    description: '這是商品1的描述',
  },
  {
    id: 4,
    name: 'OPPO RENO4Z',
    price: 1300,
    description: '這是商品2的描述',
  },
  {
    id: 5,
    name: 'iPhone 12 Pro Max',
    price: 490000,
    description: '這是商品1的描述',
  },
];
</script>

<style scoped>
.product-list {
  flex: 1;
  padding: 20px;
}

.sort-bar {
  display: flex;
  margin-bottom: 20px;
}
.sort-bar Button {
  margin-right: 10px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
