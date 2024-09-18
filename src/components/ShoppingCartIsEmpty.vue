<template>
  你的購物車還是空的
  <Button
    label="去瞎拼吧"
    class="mt-3 large-button"
    @click="goShopping"
  ></Button>
</template>
<script setup lang="ts">
import Button from 'primevue/button';
import router from '@/router';

const goShopping = () => {
  router.push({ name: 'home' });
};
</script>
<style scoped>
.large-button {
  font-size: 1.5rem;
  padding: 5px 40px;
}
</style>
