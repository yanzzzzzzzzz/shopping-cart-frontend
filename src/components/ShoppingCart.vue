<template>
  <div class="bg-white pl-2 pr-4 py-3" style="width: 1200px">
    <div class="flex">
      <Checkbox class="mx-4" />
      <label class="w-6">商品</label>
      <label class="w-2 text-center">單價</label>
      <label class="w-2 text-center">數量</label>
      <label class="w-2 text-center">總計</label>
      <label class="w-1 text-center">操作</label>
    </div>
  </div>

  <div class="bg-white mt-3">
    <div class="px-5 py-3 divider">
      <Checkbox class="mr-2" />
      <label class="ml-2">{{ storeName }}</label>
    </div>
    <div v-for="cartItem in cartItems">
      <ShoppingCartItem :cartItem="cartItem" @refresh="handleDelete" />
    </div>
    <div class="px-2 py-4"></div>
  </div>

  <div class="bg-white mt-3 px-2 py-3 flex align-items-center">
    <Checkbox class="mx-4" />
    <label class="w-8">全選({{ selected }})</label>
    <label class="w-2">總金額({{ selected }}個商品):$0</label>
    <Button label="去買單" class="w-2"></Button>
  </div>
</template>
<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import { ref } from 'vue';
import { CartItem } from '@/Model/type';
import ShoppingCartItem from './ShoppingCartItem.vue';
defineProps<{
  cartItems: CartItem[];
}>();
const emit = defineEmits();
const storeName = ref('立達國際官方旗艦店');
const selected = ref(1);
const handleDelete = () => {
  emit('refresh');
};
</script>
<style scoped>
.divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
</style>
