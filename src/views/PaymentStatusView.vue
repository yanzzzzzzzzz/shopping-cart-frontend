<template>
  <div>
    付款成功
    <Button @click="goHome">回首頁</Button>
  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button';
import router from '@/router';
const goHome = () => {
  router.push({ name: 'home' });
};
</script>
