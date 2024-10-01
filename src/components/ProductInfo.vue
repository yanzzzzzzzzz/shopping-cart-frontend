<template>
  <section v-if="props.product" class="flex bg-white mt-4">
    <section class="p-2" style="width: 480px">
      <Image :src="props.product.imageUrl" alt="Image" width="480" preview />
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
        <div>
          <span v-if="selectedVariantId == null">
            ${{ minPrice
            }}<span v-if="minPrice !== maxPrice"> - ${{ maxPrice }}</span>
          </span>
          <span v-else>
            ${{
              props.variants?.find((v) => v.id === selectedVariantId)?.price
            }}
          </span>
        </div>
      </div>
      <div class="mt-2">
        <div class="flex flex-column">
          <section class="flex product-info p-2">
            <h3 class="sub-title">分期0利率</h3>
            <div class="flex">
              <div>3期x $12 (0利率)</div>
            </div>
          </section>
          <section class="flex product-info p-2">
            <h3 class="sub-title">運送</h3>
            <div class="flex">
              <div>運送到 台北市</div>
            </div>
          </section>
          <div class="p-2" :style="{ backgroundColor: productBg }">
            <section class="flex product-info align-items-baseline">
              <h3 class="sub-title">類型</h3>
              <div class="flex align-items-center type-select">
                <button
                  v-for="productVariant in props.variants"
                  :key="productVariant.id"
                  class="type-button"
                  :class="{ selected: selectedVariantId === productVariant.id }"
                  @click="selectType(productVariant)"
                >
                  {{ productVariant.variantName }}
                </button>
              </div>
            </section>
            <section class="flex product-info">
              <h3 class="sub-title">數量</h3>
              <div class="flex align-items-center">
                <InputNumber
                  v-model="amount"
                  showButtons
                  buttonLayout="horizontal"
                  :min="1"
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
                <div class="ml-2 sub-title">還剩 {{ inventory }} 件</div>
              </div>
            </section>
            <p style="color: red">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
      <div class="mt-2">
        <div class="pl-3">
          <Button
            label="加入購物車"
            icon="pi pi-shopping-cart"
            class="border-noround w-10rem"
            v-on:click="addToCart"
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
import { Product, ProductVariantModel } from '@/Model/type';
import { addCartItem } from '@/api/shopingCart.api';
import { AddCartItemModel } from '@/Model/type';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
interface Props {
  product: Product | undefined;
  variants: ProductVariantModel[] | undefined;
}

const props = defineProps<Props>();

const title = computed(() => props.product?.name || '');
const rating = computed(() => props.product?.rating || '0');
const comment = ref(41);
const sellNum = ref(1523);

const prices = computed(
  () => props.variants?.map((v) => parseFloat(v.price)) || []
);
const minPrice = computed(() => Math.min(...prices.value));
const maxPrice = computed(() => Math.max(...prices.value));

const amount = ref(1);
const inventory = computed(() => {
  if (!props.variants) return 0;

  if (selectedVariantId.value === 0) {
    return (
      props.variants.reduce((sum, variant) => sum + variant.inventory, 0) || 0
    );
  } else {
    return (
      props.variants.find((v) => v.id === selectedVariantId.value)?.inventory ??
      0
    );
  }
});

const selectedVariantId = ref<number | null>(null);
const productBg = ref('');
const errorMessage = ref('');
const selectType = (type: ProductVariantModel) => {
  if (selectedVariantId.value === type.id) {
    selectedVariantId.value = null;
    return;
  }
  selectedVariantId.value = type.id;
  productBg.value = '';
  errorMessage.value = '';
};

const addToCart = async () => {
  if (props.product?.id == null) return;
  if (selectedVariantId.value == null) {
    console.log('selectedVariantId.value == null');
    productBg.value = '#fff5f5';
    errorMessage.value = '請先選擇商品規格';
    return;
  }
  if (!userStore.isLoggedIn) {
    router.push({
      name: 'login',
    });
    return;
  }
  const cartItem: AddCartItemModel = {
    productId: props.product?.id,
    productVariantId: selectedVariantId.value,
    amount: amount.value,
  };
  console.log(cartItem);

  await addCartItem(cartItem);
};
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
  transition: all 0.3s ease;
}

.type-button.selected {
  background-color: var(--p-primary-color);
  color: white;
  border-color: var(--p-primary-color);
}
</style>
