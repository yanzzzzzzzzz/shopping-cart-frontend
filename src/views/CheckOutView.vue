<template>
  <div>
    <CheckOutProductList :checkoutItems="checkoutItems" />
    <DiscountCoupon />
    <PaymentMethodSelector
      :totalPrice="totalPrice"
      :shippingFee="shippingFee"
    />
    <CheckoutTotalPrice :shippingFee="shippingFee" :totalPrice="totalPrice" />
    <div class="bg-white justify-content-end flex" style="width: 1200px">
      <div class="p-5">
        <Button
          class="mr-2 w-15rem border-noround"
          label="下訂單"
          @click="processCheckout"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CheckOutProductList from '@/components/CheckOutProductList.vue';
import DiscountCoupon from '@/components/DiscountCoupon.vue';
import PaymentMethodSelector from '@/components/PaymentMethodSelector.vue';
import { computed, onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/Model/type';
import Button from 'primevue/button';
import router from '@/router';
import CheckoutTotalPrice from '@/components/CheckoutTotalPrice.vue';
const cartStore = useCartStore();
const checkoutItems = ref<Array<CartItem>>();
const shippingFee = ref(60);

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
const totalPrice = computed(() => {
  return checkoutItems.value
    ? checkoutItems.value.reduce((sum, productItem) => {
        return sum + productItem.price * productItem.amount;
      }, 0)
    : 0;
});
</script>
