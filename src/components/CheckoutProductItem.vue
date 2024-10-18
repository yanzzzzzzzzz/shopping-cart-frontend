<template>
  <div class="w-6 flex align-items-center">
    <Image
      :src="product.imageUrl"
      alt="Image"
      width="50"
      class=""
      imageClass="border-circle"
    />
    <label class="product-name">{{ product.name }}</label>
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
  max-width: 450px; /* 设置最大宽度以防止溢出 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis; /* 显示省略号 */
}
</style>
