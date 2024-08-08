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
    <section class="px-3 py-2">
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
    </section>
  </section>
</template>
<script setup lang="ts">
import Image from 'primevue/image';
import { ref } from 'vue';
const title = ref(
  '【BODY GOALS 】多效乳清蛋白飲 bodygoals 乳清蛋白飲 植物性蛋 高蛋白豌豆蛋白 蛋白飲 素食高蛋白'
);
const rating = ref('4.9');
const comment = ref(41);
const sellNum = ref(1523);
const prices = [37, 38, 39, 40, 41];
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
const productType = ref([
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
  '【全素】馥郁奶茶/豌豆蛋白飲',
  '【全素】靜岡抹茶/豌豆蛋白飲',
]);
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
</style>
