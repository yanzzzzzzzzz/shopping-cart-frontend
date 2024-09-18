<template>
  <div v-if="isNull" class="text-center">
    你的購物車還是空的
    <Button
      label="去瞎拼吧"
      class="mt-3 large-button"
      @click="goShopping"
    ></Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import router from '@/router';
const isNull = ref(true);

const goShopping = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped>
.text-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px auto;
}

.large-button {
  font-size: 1.5rem;
  padding: 5px 40px;
}
</style>
