<template>
  <div class="bg-white mt-4" style="width: 1200px">
    <div class="p-5 border-setting">
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
    <div class="p-5 border-setting">
      <div v-if="selectedPayment == '貨到付款'" class="flex">
        <div class="w-2">貨到付款</div>
        <div>現付</div>
      </div>
      <div v-if="selectedPayment == '信用卡'" class="flex">
        <div class="w-2">選擇付款帳戶</div>
        <div>
          <div class="mb-4">卡片詳情</div>
          <FloatLabel variant="on" class="mb-4">
            <InputText v-model="cardNo" />
            <label>信用卡號碼</label>
          </FloatLabel>

          <div class="flex mb-4">
            <FloatLabel class="pr-3">
              <InputText v-model="expiredDate" />
              <label>到期日(MM/YY)</label>
            </FloatLabel>
            <FloatLabel>
              <InputText v-model="cvc" />
              <label>安全驗證碼</label>
            </FloatLabel>
          </div>
          <FloatLabel class="mb-4">
            <InputText v-model="name" />
            <label>持卡者名稱</label>
          </FloatLabel>
          <FloatLabel class="mb-4">
            <InputText v-model="address" />
            <label>帳單地址</label>
          </FloatLabel>
          <FloatLabel class="mb-4">
            <InputText v-model="zipCode" />
            <label>郵遞區號</label>
          </FloatLabel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
const typeOfPayments = ref(['貨到付款', '信用卡']);
const selectedPayment = ref('信用卡');
const cardNo = ref('');
const expiredDate = ref('');
const cvc = ref('');
const name = ref('');
const address = ref('');
const zipCode = ref('');
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
.border-setting {
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.05);
}
</style>
