<template>
  <div v-if="isEmpty" class="text-center">
    <ShoppingCartIsEmpty></ShoppingCartIsEmpty>
  </div>
  <div v-else>
    <ShoppingCart :cartItems="cartItems"></ShoppingCart>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ShoppingCartIsEmpty from '@/components/ShoppingCartIsEmpty.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

import { getCartItems } from '@/api/shopingCart.api';
import { CartItem } from '@/Model/type';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const cartItems = ref<CartItem[]>([]);
const isEmpty = ref(false);
const fetchData = async (userId: number) => {
  cartItems.value = await getCartItems(userId);
};
onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (token == null) {
      return;
    }
    await fetchData(userStore.id);
  } catch (error: any) {
    console.error('profile error:', error);
  }
});
</script>

<style scoped>
.text-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px auto;
}

.container {
  margin: 10px auto;
  background-color: white;
}
</style>
