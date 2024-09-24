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
import { profile } from '@/api/user.api';
import { CartItem } from '@/Model/type';

const cartItems = ref<CartItem[]>([]);
const isEmpty = ref(false);
onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (token == null) {
      return;
    }
    const userProfile = await profile(token);
    cartItems.value = await getCartItems(userProfile.id);
  } catch (error) {
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
