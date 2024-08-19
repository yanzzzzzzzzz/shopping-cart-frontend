<template>
  <div class="bg-white mt-3 p-5">
    <div v-if="props.specs">
      <div class="title">商品規格</div>
      <div class="pt-2 m-2">
        <div v-for="spec in props.specs" :key="spec.name" class="subtitle">
          <label class="spec-label">{{ spec.name }}</label>
          <span>{{ spec.specValue }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Spec } from '@/Model/type';

const props = defineProps<{
  specs?: Spec[];
}>();
</script>
<style scoped>
.spec-label {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.875rem;
  padding-right: 0.75rem;
  width: 8.75rem;
  display: inline-block;
}
.subtitle {
  margin-bottom: 1rem;
}
.title {
  font-size: 1.125rem;
  background-color: #fafafa;
  padding: 1rem 0.5rem;
}
</style>
