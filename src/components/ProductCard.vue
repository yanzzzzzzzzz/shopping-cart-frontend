<template>
  <Card class="hover-card border-noround cursor-pointer">
    <template #content>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="justify-content-between flex flex-column">
        <p class="description">{{ product.description }}</p>
        <h3>${{ product.price }}</h3>
        <p>
          <i class="pi pi-star-fill star-color"></i> {{ product.rating }} 已售出
          1.7萬
        </p>
      </div>
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
.description {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  min-height: 2.5rem;
}
</style>
