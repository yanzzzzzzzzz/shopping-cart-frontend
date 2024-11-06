<template>
  <div class="bg-white p-5" style="width: 1200px">
    <div class="pb-3 border-bottom-line"><h3>我的檔案</h3></div>
    <div class="m-4 pl-8 flex" style="flex-direction: row">
      <div>
        <table>
          <tr>
            <td class="title">使用者帳號</td>
            <td class="text">{{ userInfo.account }}</td>
          </tr>
          <tr>
            <td class="title">姓名</td>
            <td class="text">
              <InputText v-model="userInfo.userName" />
            </td>
          </tr>
          <tr>
            <td class="title">Email</td>
            <td class="text">
              <InputText v-model="userInfo.email" />
            </td>
          </tr>
          <tr>
            <td class="title">手機號碼</td>
            <td class="text"><InputText v-model="userInfo.phoneNumber" /></td>
          </tr>
          <tr>
            <td class="title">性別</td>
            <td class="text">
              <div class="flex flex-row gap-3">
                <div
                  v-for="category in categories"
                  :key="category.key"
                  class="flex items-center"
                >
                  <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="dynamic"
                    :value="category.name"
                  />
                  <label :for="category.key">{{ category.name }}</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="title">生日</td>
            <td class="text">{{ userInfo.birth }}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button label="儲存"></Button>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex" style="justify-content: center; width: 17.5rem">
        <div style="flex-direction: column">
          <img :src="userInfo.image" class="rounded-image" />
          <div>
            <Button label="選擇圖片"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';

import { ref } from 'vue';
const userStore = useUserStore();
const userInfo = ref({
  account: userStore.userName,
  userName: userStore.userName,
  email: 'ewrwre@yahso.com.tw',
  phoneNumber: '0987654321',
  sex: '男',
  birth: '1911/01/01',
  image: 'https://i.imgur.com/Jvh1OQm.jpeg',
});
const selectedCategory = ref('男');
const categories = ref([
  { name: '男', key: 'male' },
  { name: '女', key: 'female' },
  { name: '其他', key: 'other' },
]);
</script>
<style scoped>
.border-bottom-line {
  border-bottom: 0.0625rem solid #efefef;
}
.title {
  color: rgba(85, 85, 85, 0.8);
  min-width: 20%;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: right;
  white-space: nowrap;
}
.text {
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-left: 20px;
}
.rounded-image {
  height: 100px;
  width: 100px;
  border-radius: 50%; /* 使图片呈现为圆形 */
}
</style>
