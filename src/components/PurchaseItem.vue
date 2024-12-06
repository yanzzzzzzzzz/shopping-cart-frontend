<template>
  <div class="bg-white px-3 py-3 mt-2" v-for="order in orders">
    <section class="pb-3 border-bottom-line">賣場名稱 123ez buy</section>
    <div
      v-for="item in order.items"
      class="flex"
      style="word-wrap: break-word; align-items: center; flex-wrap: nowrap"
    >
      <div
        class="flex p-2"
        style="align-items: flex-start; flex: 1; flex-wrap: nowrap"
      >
        <img
          :src="item.imageUrl"
          width="80"
          height="80"
          style="border: 1px solid #e1e1e1"
        />
        <div
          class="flex pl-2"
          style="
            align-items: flex-start;
            flex: 1;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
          "
        >
          <div>{{ item.productName }}</div>
          <div>規格:{{ item.variantName }}</div>
          <div>x{{ item.quantity }}</div>
        </div>
      </div>

      <div>{{ item.price }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Order } from '@/Model/type';
defineProps<{
  orders: Order[];
}>();
</script>
<style scoped>
.border-bottom-line {
  border-bottom: 0.0625rem solid #efefef;
}
</style>
