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

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';
import { getProductList } from '@/api/product.api';
const products = ref([]);

const fetchProducts = async () => {
  try {
    products.value = await getProductList();
  } catch (error) {
    console.error('獲取產品列表失敗:', error);
    // 這裡可以添加錯誤處理邏輯，比如顯示錯誤消息給用戶
  }
};

onMounted(() => {
  fetchProducts();
});
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
