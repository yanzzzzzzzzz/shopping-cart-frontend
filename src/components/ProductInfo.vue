<template>
  <section class="flex bg-white mt-4">
    <section class="p-2" style="width: 480px">
      <Image
        :src="productDetail?.product.imageUrl"
        alt="Image"
        width="480"
        preview
      />
    </section>
    <section class="px-3 py-2 mb-4 w-full">
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
                :inputStyle="{ width: '50px', textAlign: 'center' }"
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
import { ref, computed } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ProductDetail } from '@/Model/type';

interface Props {
  productDetail: ProductDetail | null;
}

const props = defineProps<Props>();

const title = computed(() => props.productDetail?.product.name || '');
const rating = computed(() => props.productDetail?.product.rating || '0');
const comment = ref(41);
const sellNum = ref(1523);

const prices = computed(
  () => props.productDetail?.variants.map((v) => parseFloat(v.price)) || []
);
const minPrice = computed(() => Math.min(...prices.value));
const maxPrice = computed(() => Math.max(...prices.value));

const productTypes = computed(
  () => props.productDetail?.variants.map((v) => v.variantName) || []
);

const value = ref(0);
const amount = computed(() => {
  return (
    props.productDetail?.variants.reduce(
      (sum, variant) => sum + variant.inventory,
      0
    ) || 0
  );
});
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
