<template>
  <div class="pl-2 pr-4 mt-3 flex align-items-center divider">
    <Checkbox class="mx-4" v-model="checked" binary />
    <Image :src="cartItem.imageUrl" width="90" />
    <div class="w-3">
      <router-link
        :to="{ name: 'product', params: { id: cartItem.productId } }"
        class="product-name px-2 py-10 no-underline text-primary"
        v-tooltip="cartItem.name"
        >{{ cartItem.name }}</router-link
      >
    </div>
    <div class="pl-3 w-2">
      <label class="" style="color: gray"
        >規格: {{ cartItem.variantName }}</label
      >
    </div>
    <label class="w-2 text-center"
      >${{ Number(cartItem.price).toLocaleString() }}</label
    >
    <label class="w-2 text-center">
      <InputNumber
        v-model="amount"
        showButtons
        buttonLayout="horizontal"
        :min="0"
        :max="999999"
        :inputStyle="{ width: '80px', textAlign: 'center' }"
        @input="debouncedQuantityChange($event.value)"
        :disabled="isUpdating"
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
      >${{ (cartItem.price * cartItem.amount).toLocaleString() }}</label
    >
    <label
      class="w-1 text-center cursor-pointer"
      @click="deleteItem(cartItem.id)"
      >刪除</label
    >
  </div>
</template>
<script setup lang="ts">
import Image from 'primevue/image';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import { deleteCartItem, updateCartItem } from '@/api/shoppingCart.api';
import { CartItem } from '@/Model/type';
import { ref } from 'vue';
import { debounce } from 'lodash';
const props = defineProps<{
  cartItem: CartItem;
}>();
const checked = defineModel('checked');
const emit = defineEmits(['refresh']);
const deleteItem = async (id: number) => {
  try {
    const token = localStorage.getItem('token');
    if (token == null) {
      return;
    }
    const response = await deleteCartItem(id);
    console.log('response', response);
    emit('refresh');
  } catch (error) {}
};
const amount = ref(props.cartItem.amount);
const isUpdating = ref(false);
const debouncedQuantityChange = debounce(async (value: number) => {
  try {
    if (value !== props.cartItem.amount) {
      isUpdating.value = true;
      props.cartItem.amount = value;
      await updateCartItem(props.cartItem.id, value);
      // emit('refresh');
    }
  } catch (error) {
  } finally {
    isUpdating.value = false;
  }
}, 1000);
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
