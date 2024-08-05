<template>
  <div class="shop">
    <FilterSidebar />
    <ProductList />
  </div>
</template>

<script setup lang="ts">
import FilterSidebar from '@/components/FilterSidebar.vue';
import ProductList from '@/components/ProductList.vue';
</script>

<style scoped>
.shop {
  display: flex;
  padding: 20px 0;
}
</style>
