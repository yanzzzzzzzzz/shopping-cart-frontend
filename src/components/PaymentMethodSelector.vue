<template>
  <div class="bg-white mt-5" style="width: 1200px">
    <div class="p-5">
      <div class="flex align-items-center">
        <div class="w-2">付款方式</div>
        <button
          v-for="payment in typeOfPayments"
          class="type-button"
          :class="{ selected: selectedPayment === payment }"
          @click="selectedPayment = payment"
        >
          {{ payment }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const typeOfPayments = ref(['貨到付款', '信用卡']);
const selectedPayment = ref('貨到付款');
</script>
<style scoped>
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
