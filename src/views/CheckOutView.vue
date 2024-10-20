<template>
  <div>
    <CheckOutProductList :checkoutItems="checkoutItems" />
    <DiscountCoupon />
    <div class="bg-white mt-5" style="width: 1200px">
      <div class="p-5">
        <div class="flex align-items-center">
          <div class="w-2">付款方式</div>
          <button
            v-for="productVariant in variants"
            class="type-button"
            :class="{ selected: selectedVariant === productVariant }"
            @click="selectedVariant = productVariant"
          >
            {{ productVariant }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CheckOutProductList from '@/components/CheckOutProductList.vue';
import DiscountCoupon from '@/components/DiscountCoupon.vue';
import RadioButton from 'primevue/radiobutton';
import { onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/Model/type';
import router from '@/router';
const cartStore = useCartStore();
const checkoutItems = ref<Array<CartItem>>();
const variants = ref(['貨到付款', '信用卡']);
const selectedVariant = ref('');
onMounted(() => {
  cartStore.initItems();
  if (cartStore.selectedItems.length === 0) {
    alert('結帳商品為空, 請先選擇商品');
    router.push({ name: 'home' });
    return;
  }
  console.log('cartStore.selectedItems', cartStore.selectedItems);

  checkoutItems.value = cartStore.selectedItems;
});
</script>

<style scoped>
.type-button {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: 8px 8px 0 0;
  min-height: 2.5rem;
  min-width: 5rem;
  outline: 0;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  text-align: left;
  word-break: break-word;
  transition: all 0.3s ease;
}
.type-button.selected {
  background-color: var(--p-primary-color);
  color: white;
  border-color: var(--p-primary-color);
}
</style>
