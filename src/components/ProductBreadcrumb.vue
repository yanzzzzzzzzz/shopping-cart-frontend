<template>
  <div class="card flex justify-center">
    <Breadcrumb :home="home" :model="items" />
  </div>
</template>
<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

const home = ref({
  icon: 'pi pi-home',
});
const items = ref([
  { label: 'Electronics' },
  { label: 'Computer' },
  { label: 'Accessories' },
  { label: 'Keyboard' },
  { label: 'Wireless' },
]);
</script>
