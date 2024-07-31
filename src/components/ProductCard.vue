<template>
  <Card>
    <template #title>
      {{ product.name }}
    </template>
    <template #content>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <p>{{ product.description }}</p>
      <h3>{{ product.price }}</h3>
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
  height: auto;
}
</style>
