<template>
  <div class="w-4 flex align-items-center">
    <Image
      :src="product.imageUrl"
      alt="Image"
      width="50"
      class=""
      imageClass="border-circle"
    />
    <label class="product-name">{{ product.name }}</label>
  </div>
  <div class="w-2">
    <label v-if="product.variantName != null" class="product-variant-name ml-3"
      >選項: {{ product.variantName }}</label
    >
  </div>

  <label class="w-2 text-right">{{ product.price.toLocaleString() }}</label>
  <label class="w-2 text-right">{{ product.amount }}</label>
  <label class="w-2 text-right">{{
    (product.price * product.amount).toLocaleString()
  }}</label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '@/Model/type';
import Image from 'primevue/image';
const props = defineProps<{
  product: CartItem;
}>();
</script>

<style scoped>
.product-name {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-variant-name {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gray;
}
</style>
