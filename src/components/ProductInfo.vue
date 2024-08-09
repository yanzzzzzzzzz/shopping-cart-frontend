<template>
  <section class="flex bg-white mt-4">
    <section class="p-2" style="width: 450px">
      <Image
        src="https://down-tw.img.susercontent.com/file/tw-11134207-7r992-lycg4m1xr0ms69"
        alt="Image"
        width="450"
        preview
      />
    </section>
    <section class="px-3 py-2 mb-4">
      <div>
        <span class="text-2xl">
          {{ title }}
        </span>
      </div>
      <div class="flex mt-2 text-lg">
        <div class="pr-4">
          <p>
            {{ rating }}
            <i class="pi pi-star-fill primary-color"></i>
            <i class="pi pi-star-fill primary-color"></i>
            <i class="pi pi-star-fill primary-color"></i>
            <i class="pi pi-star-fill primary-color"></i>
            <i class="pi pi-star-fill primary-color"></i>
          </p>
        </div>
        <div class="border-left-style px-4">
          <p>{{ comment }} 評價</p>
        </div>
        <div class="border-left-style pl-4">
          <p>{{ sellNum }} 已售出</p>
        </div>
      </div>
      <div class="price-bg text-3xl p-3 mt-2 primary-color">
        <div v-if="minPrice === maxPrice">
          {{ minPrice }}
        </div>
        <div v-else>${{ minPrice }} - ${{ maxPrice }}</div>
      </div>
      <div class="mt-2">
        <div class="flex flex-column">
          <section class="flex product-info">
            <h3 class="sub-title">分期0利率</h3>
            <div class="flex">
              <div>3期x $12 (0利率)</div>
            </div>
          </section>
          <section class="flex product-info">
            <h3 class="sub-title">運送</h3>
            <div class="flex">
              <div>運送到 台北市</div>
            </div>
          </section>
          <section class="flex product-info align-items-baseline">
            <h3 class="sub-title">類型</h3>
            <div class="flex align-items-center type-select">
              <button v-for="productType in productTypes" class="type-button">
                {{ productType }}
              </button>
            </div>
          </section>
          <section class="flex product-info">
            <h3 class="sub-title">數量</h3>
            <div class="flex align-items-center">
              <InputNumber
                v-model="value"
                showButtons
                buttonLayout="horizontal"
                :min="0"
                :max="99"
                inputStyle="width: 50px; text-align: center;"
              >
                <template #incrementbuttonicon>
                  <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                  <span class="pi pi-minus" />
                </template>
              </InputNumber>
              <div class="ml-2 sub-title">還剩 {{ amount }} 件</div>
            </div>
          </section>
        </div>
      </div>
      <div class="mt-2">
        <div class="pl-3">
          <Button
            label="加入購物車"
            icon="pi pi-shopping-cart"
            class="border-noround w-10rem"
          />
          <Button label="直接購買" class="ml-4 border-noround w-10rem" />
        </div>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import Image from 'primevue/image';
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
const title = ref(
  '【BODY GOALS 】多效乳清蛋白飲 bodygoals 乳清蛋白飲 植物性蛋 高蛋白豌豆蛋白 蛋白飲 素食高蛋白'
);
const rating = ref('4.9');
const comment = ref(41);
const sellNum = ref(1523);
const prices = [37, 38, 39, 40, 41];
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
const productTypes = ref([
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【英式奶茶】多效乳清(奶素)',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【英式奶茶】多效乳清(奶素)',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【英式奶茶】多效乳清(奶素)',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【英式奶茶】多效乳清(奶素)',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【英式奶茶】多效乳清(奶素)',
]);
const value = ref(0);
const amount = ref(1132);
</script>
<style scoped>
.primary-color {
  color: var(--p-primary-color) !important;
}
.border-left-style {
  border-left: 1px solid rgba(0, 0, 0, 0.14);
}
.price-bg {
  background: #fafafa;
}
.product-info {
  align-items: center;
  margin-bottom: 25px;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
}
.sub-title {
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
}
.type-select {
  flex-basis: 515px;
  flex-wrap: wrap;
  margin-top: -8px;
  max-height: 220px;
  max-width: 515px;
  overflow-y: auto;
}
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
}
</style>
