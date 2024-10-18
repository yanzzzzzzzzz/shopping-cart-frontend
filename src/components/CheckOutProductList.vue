<template>
  <div class="bg-white pl-2 pr-4 py-3" style="width: 1200px">
    <div class="flex pl-4 pt-4 pr-2">
      <label class="w-6">訂單商品</label>
      <label class="w-2 text-right">單價</label>
      <label class="w-2 text-right">數量</label>
      <label class="w-2 text-right">總價</label>
    </div>

    <div class="flex px-4 mt-4">
      <div class="align-items-center">
        <i class="pi pi-shop"></i>
        <label>{{ shopName }}</label>
      </div>
    </div>
    <div
      class="flex pl-4 pt-4 pr-2 align-items-center"
      v-for="product in checkoutItems"
      :key="product.id"
    >
      <checkOutProductItem :product="product" />
    </div>
    <div class="text-right mt-3">
      <label class="pr-7"
        >訂單金額 ({{ checkoutItems == null ? 0 : checkoutItems.length }})
        商品:</label
      >
      <label class="pr-2">{{
        totalPrice ? totalPrice.toLocaleString() : '0'
      }}</label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import checkOutProductItem from './CheckoutProductItem.vue';
import { CartItem } from '@/Model/type';
const props = defineProps<{
  checkoutItems: CartItem[] | undefined;
}>();
const shopName = ref('立達國際官方旗艦店');

const totalPrice = computed(() => {
  return props.checkoutItems?.reduce((sum, productItem) => {
    return sum + productItem.price * productItem.amount;
  }, 0);
});
</script>
