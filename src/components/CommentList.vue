<template>
  <div v-for="comment in comments" class="py-4 mx-8 flex comment">
    <div v-if="comment.userImg === 'default'" class="user-div">
      <i class="pi pi pi-user user-icon"></i>
    </div>

    <Image
      v-else
      :src="comment.userImg"
      alt="Image"
      width="50"
      class=""
      imageClass="border-circle"
    />
    <div class="pl-3">
      <p class="m-0">{{ comment.accountName }}</p>
      <span
        v-for="n in 5"
        :key="n"
        :class="[
          'pi',
          n <= comment.rating ? 'pi-star-fill' : 'pi-star',
          'mr-1 ',
        ]"
        style="color: #ffce3d"
      ></span>
      <p class="m-0" style="color: rgba(0, 0, 0, 0.54)">
        {{ comment.date }} | {{ comment.productSpec }}
      </p>
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Image from 'primevue/image';

const comments = ref([
  {
    rating: 5,
    date: '2024-06-23 16:11',
    productSpec: '全素多效豌豆蛋白飲 繽紛野莓(31g)',
    comment:
      '本身喜歡Body Goal的豌豆高蛋白飲，口味眾多！特別喜歡繽紛野莓和濃芋歐蕾口味，喝起來很香濃、很療癒，大推！可增加飽足感！',
    userImg:
      'https://down-tw.img.susercontent.com/file/aecb04b68dbfad1bb422cab7a5b7a57e_tn',
    accountName: 'l*****8',
  },
  {
    rating: 5,
    date: '2024-07-26 21:16',
    productSpec: ' 全素多效豌豆蛋白飲 芝麻歐蕾(31g)',
    comment:
      '第一次購買這款的蛋白粉意外的很好喝喔，有各種的口味從泡起來很方便，￼最喜歡芋頭和法式可可！',
    userImg:
      'https://down-tw.img.susercontent.com/file/aecb04b68dbfad1bb422cab7a5b7a57e_tn',
    accountName: 'c*****3',
  },
  {
    rating: 5,
    date: '2024-07-12 01:09',
    productSpec: '全素多效豌豆蛋白飲 濃芋歐蕾(31g)',
    comment:
      '出貨迅速，包裝完善，商品的品質也很優良，訂給媽媽補充蛋白質的，希望媽媽喝的習慣～',
    userImg: 'default',
    accountName: 'f*****4',
  },
]);
</script>
<style scoped>
.comment {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
.user-div {
  height: 50px;
  width: 50px;
  background-color: #f5f5f5;
  border-radius: 50%;
}
.user-icon {
  font-size: 30px;
  position: relative;
  top: 15%;
  left: 20%;
  color: gray;
}
</style>
