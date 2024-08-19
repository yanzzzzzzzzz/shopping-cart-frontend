<template>
  <div>
    <ProductBreadcrumb />
    <div v-if="isLoading">正在加載...</div>
    <template v-else>
      <ProductInfo :productDetail="productData" />
      <ProdcutShop />
      <ProductSpec />
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
import { ProductDetail } from '@/Model/type';

const route = useRoute();
const productId = parseInt(route.params.id as string, 10);
const productData = ref<ProductDetail | null>(null);
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
