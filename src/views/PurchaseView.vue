<template>
  <div style="width: 980px; background: #f5f5f5">
    <section class="QmO3Bu mb-2">
      <a
        v-for="(type, index) in types"
        :key="index"
        class="KI5har"
        :title="type"
      >
        <span>{{ type }}</span>
      </a>
    </section>
    <section>
      <div class="Gv8cvd">
        <InputText
          class="w-full search-input"
          v-model="value2"
          type="text"
          placeholder="您可以透過賣家名稱，訂單編號或商品名稱搜尋"
          unstyled="true"
        />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import InputText from 'primevue/inputtext';

const types = ref([
  '全部',
  '待付款',
  '待出貨',
  '待收貨',
  '已完成',
  '取消',
  '退貨/退款',
]);
const value2 = ref();
</script>
<style scoped>
.QmO3Bu {
  background: rgb(255, 255, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  margin-bottom: 12px;
  overflow: hidden;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 10;
}
.KI5har {
  align-items: center;
  background: rgb(255, 255, 255);
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: flex;
  flex: 1 1 0%;
  font-size: 16px;
  justify-content: center;
  line-height: 19px;
  overflow: hidden;
  padding: 16px 0px;
  text-align: center;
  transition: color 0.2s;
  user-select: none;
}
.Gv8cvd {
  align-items: center;
  background: #eaeaea;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  color: #212121;
  display: flex;
  margin: 12px 0;
  padding: 12px 0;
}
.search-input {
  border: 1px solid transparent; /* 保持边框透明 */
  box-shadow: none; /* 保持无阴影 */
  outline: none; /* 取消轮廓 */
  background-color: transparent;
  font-size: 14px;
}
</style>
