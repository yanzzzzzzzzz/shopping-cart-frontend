<template>
  <div class="bg-white pl-2 pr-4 py-3" style="width: 1200px">
    <div class="flex">
      <Checkbox class="mx-4" />
      <label class="w-7">商品</label>
      <label class="w-2 text-center">單價</label>
      <label class="w-2 text-center">數量</label>
      <label class="w-2 text-center">總計</label>
      <label class="w-1 text-center">操作</label>
    </div>
  </div>

  <div class="bg-white mt-3">
    <div class="px-5 py-3 divider">
      <Checkbox class="mr-2" />
      <label>{{ storeName }}</label>
    </div>
    <div class="pl-2 pr-4 flex align-items-center divider">
      <Checkbox class="mx-4" />
      <Image :src="productImageUrl" />
      <div class="w-3">
        <label class="product-name">{{ productName }}</label>
      </div>
      <div class="w-3">
        <label class="" style="color: gray"
          >規格: 【黑色】100W三孔充電頭+ 線</label
        >
      </div>
      <label class="w-2 text-center">$1299</label>
      <label class="w-2 text-center">
        <InputNumber
          v-model="amount"
          showButtons
          buttonLayout="horizontal"
          :min="0"
          :max="99"
          :inputStyle="{ width: '50px', textAlign: 'center' }"
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
        >$1299</label
      >
      <label class="w-1 text-center">刪除</label>
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
import Image from 'primevue/image';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ref } from 'vue';
const storeName = ref(' 立達國際官方旗艦店');
const productImageUrl = ref(
  'https://down-tw.img.susercontent.com/file/tw-11134207-7r98u-lyhbne3c436m6f@resize_w80_nl.webp'
);
const productName = ref(
  '【公司貨】130WGaN氮化鎵四孔充電器GIGASTONE｜iPhone手機/Mac筆電100W三孔/PD快充頭+快充線'
);
const amount = ref(1);
const selected = ref(1);
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
