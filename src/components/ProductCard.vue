<template>
  <Card
    v-if="props.product"
    class="hover-card border-noround cursor-pointer"
    @click="productDetail(props.product.id)"
  >
    <template #content>
      <img
        :src="props.product.imageUrl"
        alt="Product Image"
        class="product-image"
      />
      <div class="justify-content-between flex flex-column">
        <p class="description my-1">{{ props.product.name }}</p>
        <h3 class="my-1">${{ props.product.price }}</h3>
        <p class="m-0">
          <i class="pi pi-star-fill star-color"></i>
          {{ props.product.rating }} 已售出 1.7萬
        </p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { Product } from '@/Model/type';
import { useRouter } from 'vue-router';
const props = defineProps<{
  product?: Product;
}>();
const router = useRouter();
const productDetail = (id: number) => {
  router.push({
    name: 'product',
    params: {
      id: id,
    },
  });
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  min-height: 2.7rem;
}
</style>
