<template>
  <CheckOutProductList :checkoutItems="checkoutItems" />
</template>
<script setup lang="ts">
import CheckOutProductList from '@/components/CheckOutProductList.vue';
import { onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/Model/type';
import router from '@/router';
const cartStore = useCartStore();
const checkoutItems = ref<Array<CartItem>>();
onMounted(() => {
  if (cartStore.selectedItems.length === 0) {
    alert('結帳商品為空, 請先選擇商品');
    router.push({ name: 'home' });
    return;
  }
  console.log('cartStore.selectedItems', cartStore.selectedItems);

  checkoutItems.value = cartStore.selectedItems;
});
</script>
