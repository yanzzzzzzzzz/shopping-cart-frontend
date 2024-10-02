<template>
  <div>
    <ProductBreadcrumb />
    <div v-if="isLoading">正在加載...</div>
    <template v-else>
      <ProductInfo
        :product="productData?.product"
        :variants="productData?.variants"
        @showAddToCart="showAddToCart"
      />
      <ProductShop />
      <ProductSpec :specs="productData?.specs" />
      <ProductDescription :desc="productData?.product?.description" />
      <ProductRating />
    </template>
    <div
      v-if="addToCart"
      class="flex flex-column align-items-center justify-content-center fixed add-cart"
    >
      <div class="border-circle p-3 check-color">
        <i class="pi pi-check text-white" style="font-size: 30px"></i>
      </div>
      <div class="mt-2 text-white text-center">商品已加入購物車</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProductDetail } from '@/api/product.api';
import ProductBreadcrumb from '@/components/ProductBreadcrumb.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import ProductShop from '@/components/ProductShop.vue';
import ProductSpec from '@/components/ProductSpec.vue';
import ProductRating from '@/components/ProductRating.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import { ProductData } from '@/Model/type';

const route = useRoute();
const productId = parseInt(route.params.id as string, 10);
const productData = ref<ProductData>();
const isLoading = ref(true);
const addToCart = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    productData.value = await getProductDetail(productId);
  } catch (error) {
    console.error('獲取產品數據時出錯:', error);
  } finally {
    isLoading.value = false;
  }
});
const showAddToCart = () => {
  console.log('showAddToCart');

  addToCart.value = true;
  setTimeout(() => {
    console.log('set to false');

    addToCart.value = false;
  }, 800);
};
</script>
<style scoped>
.add-cart {
  background-color: rgba(76, 76, 76, 0.8);
  height: 25%;
  width: 25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.check-color {
  background-color: rgb(0, 191, 165);
}
</style>
