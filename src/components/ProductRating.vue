<template>
  <div class="bg-white mt-3">
    <div class="p-5">商品評價</div>
    <div
      class="m-3 p-3 product-rating-overview align-items-center justify-content-between"
    >
      <div class="pl-3 m-5 text-3xl rating-text-color text-center">
        {{ productRating.score }}/5
        <div>
          <i class="pi pi-star-fill star-color"></i>
          <i class="pi pi-star-fill star-color"></i>
          <i class="pi pi-star-fill star-color"></i>
          <i class="pi pi-star-fill star-color"></i>
          <i class="pi pi-star-fill star-color"></i>
        </div>
      </div>
      <div class="wrapper flex-grow-1">
        <SelectButton
          v-model="value"
          :options="options"
          aria-labelledby="basic"
        ></SelectButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SelectButton from 'primevue/selectbutton';
const value = ref('全部');
const options = ref([
  '全部',
  '5星',
  '4星',
  '3星',
  '2星',
  '1星',
  '附上評論',
  '附上照片/影片',
]);
const productRating = ref({
  score: 4.7,
});
</script>
<style scoped>
.product-rating-overview {
  align-items: center;
  background-color: #fffbf8;
  border: 1px solid #f9ede5;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1rem;
  min-height: 5rem;
  padding: 1.875rem;
}
.rating-text-color {
  color: var(--p-primary-color) !important;
}
.star-color {
  color: var(--p-primary-color) !important;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, auto);
  padding-left: 25px;
}
.rating-button {
  color: black;
  background-color: white;
  margin-bottom: 0.3125rem;
  margin-right: 0.5rem;
  margin-top: 0.3125rem;
  min-width: 6.25rem;
  height: 2rem;
  border: 1px solid #f9ede5;
  padding: 0 0.625rem;
  text-align: center;
}
</style>
