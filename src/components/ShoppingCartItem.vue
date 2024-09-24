<template>
  <div class="pl-2 pr-4 mt-3 flex align-items-center divider">
    <Checkbox class="mx-4" />
    <Image :src="cartItem.imageUrl" width="90" />
    <div class="w-3">
      <label class="product-name">{{ cartItem.name }}</label>
    </div>
    <div class="w-3">
      <label class="" style="color: gray"
        >規格: {{ cartItem.variantName }}</label
      >
    </div>
    <label class="w-2 text-center">${{ cartItem.price }}</label>
    <label class="w-2 text-center">
      <InputNumber
        v-model="cartItem.amount"
        showButtons
        buttonLayout="horizontal"
        :min="0"
        :max="99"
        :inputStyle="{ width: '50px', textAlign: 'center' }"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </label>
    <label
      class="w-2 text-center"
      style="color: var(--p-primary-color) !important"
      >${{ cartItem.price * cartItem.amount }}</label
    >
    <label class="w-1 text-center">刪除</label>
  </div>
</template>
<script setup lang="ts">
import Image from 'primevue/image';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';

import { CartItem } from '@/Model/type';
defineProps<{
  cartItem: CartItem;
}>();
</script>
<style scoped>
.product-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
</style>
