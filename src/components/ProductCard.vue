<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>價格：{{ product.price }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object,
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
  text-align: center;
}
</style>
