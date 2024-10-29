<template>
  <div class="bg-white">
    <div class="px-3 py-3 border-setting summary-section align-items-center">
      <h3 class="flex-container label-text">商品總金額</h3>
      <div class="flex-container total-value">
        ${{ totalPrice.toLocaleString() }}
      </div>
      <h3 class="flex-container label-text">運費總金額</h3>
      <div class="flex-container total-value">
        ${{ shippingFee.toLocaleString() }}
      </div>
      <h3 class="flex-container label-text total-amount">總付款金額</h3>
      <div class="flex-container highlighted-amount total-value total-amount">
        ${{ (totalPrice + shippingFee).toLocaleString() }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  totalPrice: number;
  shippingFee: number;
}>();
</script>
<style scoped>
.border-setting {
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.05);
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
.flex-container {
  align-items: center;
  display: flex;
}
.label-text {
  color: rgba(0, 0, 0, 0.54);
  grid-column-end: 3;
  grid-column-start: 2;
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
.highlighted-amount {
  color: #ee4d2d;
  font-size: 28px;
  font-weight: 500;
  height: 50px;
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
