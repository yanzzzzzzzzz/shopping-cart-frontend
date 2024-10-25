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
    <div class="px-3 py-3 border-setting summary-section">
      <h3 class="flex-container label-text">商品總金額</h3>
      <div class="flex-container total-value">
        ${{ props.totalPrice.toLocaleString() }}
      </div>
      <h3 class="flex-container label-text cFXdGN">運費總金額</h3>
      <div class="flex-container total-value cFXdGN">
        ${{ shippingFee.toLocaleString() }}
      </div>
      <h3 class="flex-container label-text total-amount">總付款金額</h3>
      <div class="flex-container highlighted-amount total-value total-amount">
        ${{ (props.totalPrice + shippingFee).toLocaleString() }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
const props = defineProps<{
  totalPrice: number;
}>();
const typeOfPayments = ref(['貨到付款', '信用卡']);
const selectedPayment = ref('信用卡');
const shippingFee = ref(45);
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
.total {
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-template-rows: auto;
  grid-column-gap: 10px;
}
.cFXdGN {
  grid-row-end: 12;
  grid-row-start: 11;
}

.total-value {
  grid-column-end: 4;
  grid-column-start: 3;
  height: 40px;
  min-width: 100px;
  padding: 0 25px 0 10px;
  -ms-grid-column-span: 1;
  justify-content: flex-end;
}
.summary-section {
  background: #fffefb;
  border-top: 1px solid #f1f0ed;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 1fr -webkit-max-content -webkit-max-content;
  grid-template-columns: 1fr max-content max-content;
  grid-template-rows: auto;
  padding-top: 15px;
  grid-column-gap: 10px;
}
.label-text {
  color: rgba(0, 0, 0, 0.54);
  grid-column-end: 3;
  grid-column-start: 2;
}
.total-amount {
  grid-row-end: 14;
  grid-row-start: 13;
}
.highlighted-amount {
  color: #ee4d2d;
  font-size: 28px;
  font-weight: 500;
  height: 50px;
}
.flex-container {
  align-items: center;
  display: flex;
}
h3 {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}
</style>
