<template>
  <div class="bg-white pl-2 pr-4 py-3" style="width: 1200px">
    <div class="flex px-4 pt-4">
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
      class="flex pl-4 pt-4 pr-2"
      v-for="product in productItems"
      :key="product.id"
    >
      <label class="w-6">
        <Image
          :src="product.imgUrl"
          alt="Image"
          width="50"
          class=""
          imageClass="border-circle"
        />{{ product.name }}</label
      >
      <label class="w-2 text-right">{{ product.unitPrice }}</label>
      <label class="w-2 text-right">{{ product.amount }}</label>
      <label class="w-2 text-right">{{
        product.unitPrice * product.amount
      }}</label>
    </div>
    <div class="text-right">
      <label class="pr-7"
        >訂單金額({{ productItems.values.length }})商品:</label
      >
      <label class="pr-3">{{ totalPrice.toLocaleString() }}</label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import Image from 'primevue/image';

const shopName = ref('立達國際官方旗艦店');
const productItems = ref([
  {
    id: 132,
    imgUrl:
      'https://down-tw.img.susercontent.com/file/tw-11134207-7r98y-lyz4m25v0yd005@resize_w80_nl.webp',
    name: 'PQI 三合一磁吸無線充電座(全新)',
    unitPrice: 1550,
    amount: 123,
  },
  {
    id: 133,
    imgUrl:
      'https://down-tw.img.susercontent.com/file/tw-11134207-7r990-lykitam378da0e@resize_w80_nl.webp',
    name: 'PQI 100W充電器 (福利品外觀瑕疵，同',
    unitPrice: 690,
    amount: 50,
  },
]);
const totalPrice = computed(() => {
  return productItems.value.reduce((sum, productItem) => {
    return sum + productItem.unitPrice * productItem.amount;
  }, 0);
});
</script>
