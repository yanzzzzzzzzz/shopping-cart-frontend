<template>
  <div class="flex bg-white mt-6 p-5">
    <Image
      :src="shopInfo.img"
      alt="Image"
      width="80"
      class=""
      imageClass="border-circle"
    />
    <div
      class="flex flex-column pl-4 pr-8 border-right-1"
      style="border-color: rgba(0, 0, 0, 0.05)"
    >
      <div class="text-lg">{{ shopInfo.shopName }}</div>
      <div class="mt-2" style="color: #757575">19分鐘前上線</div>
      <div class="mt-2">
        <Button label="聊聊" class="text-xs border-noround w-4rem"></Button>
        <Button
          label="查看賣場"
          class="ml-2 text-xs border-noround w-6rem"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from 'primevue/image';
import Button from 'primevue/button';
import { ref } from 'vue';
const shopInfo = ref({
  img: 'https://down-tw.img.susercontent.com/file/43ab0170703c09d5f578c80b888debd2_tn',
  shopName: 'Hazel選品商號 美妝時尚 | 居家生活 | 時尚醫療口罩',
  rating: 29333,
  replayRate: 71,
  addDate: '2023-12-21',
  productAmount: 596,
  followerAmount: 40000,
});
</script>
