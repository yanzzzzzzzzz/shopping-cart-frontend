<template>
  <div class="bg-white pl-2 pr-4 py-3" style="width: 1200px">
    <div class="flex">
      <Checkbox
        class="mx-4"
        v-model="checkAllTop"
        @change="handleTopCheckChange"
        binary
      />
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
    <div v-for="(cartItem, index) in cartItems" :key="cartItem.id">
      <ShoppingCartItem
        :cartItem="cartItem"
        @refresh="refresh"
        v-model:checked="checkedList[index]"
      />
    </div>
    <div class="px-2 py-4"></div>
  </div>

  <div class="bg-white mt-3 px-2 py-3 flex align-items-center">
    <Checkbox
      class="mx-4"
      v-model="checkAllBottom"
      @change="handleBottomCheckChange"
      binary
    />
    <label class="w-7">全選({{ selected }})</label>
    <label class="w-3 text-right pr-2"
      >總金額({{ selected }}個商品):${{ total.toLocaleString() }}</label
    >
    <Button label="去買單" class="w-2" @click="checkout"></Button>
  </div>
</template>
<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import { computed, ref, watch } from 'vue';
import { CartItem } from '@/Model/type';
import ShoppingCartItem from './ShoppingCartItem.vue';
import router from '@/router';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();
const props = defineProps<{
  cartItems: CartItem[];
}>();
const emit = defineEmits(['refresh']);
const storeName = ref('立達國際官方旗艦店');
const selected = computed(
  () => checkedList.value.filter((c) => c === true).length
);
const checkAllTop = ref(false);
const checkAllBottom = ref(false);
const checkedList = ref<boolean[]>([]);
const total = computed(() => {
  return props.cartItems.reduce((sum, cartItem, index) => {
    if (checkedList.value[index]) {
      return sum + cartItem.price * cartItem.amount;
    }
    return sum;
  }, 0);
});
watch(
  () => props.cartItems,
  (newItems) => {
    checkedList.value = newItems.map(() => false);
  }
);
const toggleCheckAll = (isTop: boolean) => {
  const newValue = isTop ? checkAllTop.value : checkAllBottom.value;
  if (isTop) {
    checkAllBottom.value = newValue;
  } else {
    checkAllTop.value = newValue;
  }
  checkedList.value = checkedList.value.map(() => newValue);
};

const checkout = () => {
  cartStore.clearItems();
  const selectedItems = props.cartItems.filter(
    (_, index) => checkedList.value[index]
  );
  if (selectedItems.length === 0) {
    console.log('請先選擇商品');
    return;
  }
  cartStore.setItems(selectedItems);
  router.push({ name: 'checkout' });
};
const handleTopCheckChange = () => {
  toggleCheckAll(true);
};

const handleBottomCheckChange = () => {
  toggleCheckAll(false);
};

const refresh = () => {
  emit('refresh');
};
</script>
<style scoped>
.divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
</style>
