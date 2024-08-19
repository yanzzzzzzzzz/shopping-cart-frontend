<template>
  <div>
    <ProductBreadcrumb />
    <div v-if="isLoading">正在加載...</div>
    <template v-else>
      <ProductInfo
        :product="productData?.product"
        :variants="productData?.variants"
      />
      <ProductShop />
      <ProductSpec :specs="productData?.specs" />
      <ProductDescription :desc="productData?.product?.description" />
      <ProductRating />
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProductDetail } from '@/api/product.api';
import ProductBreadcrumb from '@/components/ProductBreadcrumb.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import ProdcutShop from '@/components/ProdcutShop.vue';
import ProductSpec from '@/components/ProductSpec.vue';
import ProductRating from '@/components/ProductRating.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import { ProductData } from '@/Model/type';

const route = useRoute();
const productId = parseInt(route.params.id as string, 10);
const productData = ref<ProductData>();
const isLoading = ref(true);

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
</script>
