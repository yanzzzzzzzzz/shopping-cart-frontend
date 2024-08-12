<template>
  <div
    class="flex bg-white mt-3 p-5 align-items-center justify-content-between"
  >
    <div class="flex">
      <Image
        :src="shopInfo.img"
        alt="Image"
        width="80"
        class=""
        imageClass="border-circle"
      />
      <div
        class="flex flex-column pl-4 pr-4 border-right-1"
        style="border-color: rgba(0, 0, 0, 0.05); max-width: 440px"
      >
        <div class="text-lg shopName">{{ shopInfo.shopName }}</div>
        <div style="color: #757575">19分鐘前上線</div>
        <div class="mt-2">
          <Button label="聊聊" class="text-xs border-noround w-4rem"></Button>
          <Button
            label="查看賣場"
            class="ml-2 text-xs border-noround w-6rem"
          ></Button>
        </div>
      </div>
    </div>

    <div class="wrapper flex-grow-1">
      <div class="flex justify-content-between">
        <label class="mr-2">商品評價</label>
        <span>
          {{ shopInfo.totalRating }}
        </span>
      </div>
      <div class="flex justify-content-between">
        <label class="mr-2">聊聊回復率</label>
        <span> {{ shopInfo.replayRate }}% </span>
      </div>
      <div class="flex justify-content-between">
        <label class="mr-2">加入時間</label>
        <span> {{ shopInfo.addDate }} </span>
      </div>
      <div class="flex justify-content-between">
        <label class="mr-2">商品</label>
        <span> {{ shopInfo.productAmount }} </span>
      </div>
      <div class="flex justify-content-between">
        <label class="mr-2">回復速度</label>
        <span> {{ shopInfo.replySpeed }} </span>
      </div>
      <div class="flex justify-content-between">
        <label class="mr-2">粉絲</label>
        <span> {{ shopInfo.followerAmount }} </span>
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
  totalRating: 29333,
  replayRate: 71,
  addDate: '七年前',
  productAmount: 596,
  replySpeed: '幾小時內',
  followerAmount: 40000,
});
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px 50px;
  padding-left: 25px;
}
.shopName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
