<template>
  <div v-if="isEmpty" class="text-center">
    <ShoppingCartIsEmpty></ShoppingCartIsEmpty>
  </div>
    <ShoppingCart></ShoppingCart>
  <div v-else>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ShoppingCartIsEmpty from '@/components/ShoppingCartIsEmpty.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
const isEmpty = ref(false);
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
