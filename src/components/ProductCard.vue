<template>
  <Card class="hover-card border-noround cursor-pointer">
    <template #content>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <p>{{ product.description }}</p>
      <h3>${{ product.price }}</h3>
      <p>
        <i class="pi pi-star-fill star-color"></i> {{ product.rating }} 已售出
        1.7萬
      </p>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';
const props = defineProps({
  product: Object,
});
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 200px; /* 固定高度 */
  object-fit: cover; /* 保持圖片比例 */
}
.star-color {
  color: orange;
}
.hover-card {
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.hover-card:hover {
  border-color: var(--p-primary-color);
  transform: scale(1.03);
}
</style>
