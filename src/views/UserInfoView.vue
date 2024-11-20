<template>
  <Toast />
  <div class="bg-white p-5" style="width: 1200px">
    <div class="pb-3 border-bottom-line"><h3>我的檔案</h3></div>
    <div v-if="userInfo" class="m-4 pl-8 flex" style="flex-direction: row">
      <div class="pr-5 border-right-line">
        <table>
          <tr>
            <td class="title">使用者帳號</td>
            <td class="text">{{ userInfo.username }}</td>
          </tr>
          <tr>
            <td class="title">姓名</td>
            <td class="text">
              <InputText v-model="userInfo.name" class="w-27rem" />
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
            <td class="text"><InputText v-model="userInfo.phone" /></td>
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
                    v-model="userInfo.sex"
                    :inputId="category.key"
                    name="dynamic"
                    :value="category.key"
                  />
                  <label :for="category.key">{{ category.name }}</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="title">生日</td>
            <td class="text">
              <DatePicker
                v-model="birthday"
                showIcon
                :showOnFocus="false"
                dateFormat="yy-mm-dd"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button label="儲存" @click="save" :loading="isSaving"></Button>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex" style="justify-content: center; margin: auto">
        <div>
          <img v-if="filePreview" :src="filePreview" class="rounded-image" />
          <img
            v-else-if="userInfo?.imageId"
            :src="imageUrl"
            class="rounded-image"
          />
          <p v-else>沒有圖片</p>
          <div class="flex justify-content-center">
            <UploadFile v-model="file" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import { getUserInfo, Update } from '@/api/user.api';
import { UserInfoModel, UserInfoUpdateModel } from '@/Model/type';
import DatePicker from 'primevue/datepicker';
import { getImage, createOrUpdateImage } from '@/api/image.api';
import { onMounted, ref, computed } from 'vue';
import UploadFile from '../components/UploadFile.vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
const file = ref();
const filePreview = computed(() => {
  return file.value ? file.value.preview : '';
});
const birthday = ref();
const toast = useToast();
onMounted(async () => {
  await fetchUserInfo();
  if (userInfo.value?.imageId) {
    const data = await getImage(userInfo.value.imageId);
    imageUrl.value = data.imageUrl;
  }
});
const categories = ref([
  { name: '男', key: 'M' },
  { name: '女', key: 'F' },
  { name: '其他', key: 'O' },
]);
const userInfo = ref<UserInfoModel | null>(null);
const imageUrl = ref('');
const isSaving = ref(false);

const fetchUserInfo = async () => {
  try {
    userInfo.value = await getUserInfo();
    birthday.value = userInfo.value.birthday;
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'get user info error',
      detail: '請稍後重試',
      life: 3000,
    });
  }
};
const save = async () => {
  if (userInfo.value == null) {
    console.error('userInfo is null');
    return;
  }
  try {
    isSaving.value = true;
    console.log('file', file);

    if (file.value != null) {
      const response1 = await createOrUpdateImage(
        file.value.file,
        userInfo.value?.imageId ?? 0
      );

      if (userInfo.value.imageId == null) {
        userInfo.value.imageId = response1.data.data.id;
      }
    }
    if (birthday.value) {
      userInfo.value.birthday = formatDate(birthday.value);
    } else {
      userInfo.value.birthday = null;
    }
    const response = await Update(userInfo.value as UserInfoUpdateModel);
    console.log(response);
    toast.add({
      severity: 'success',
      summary: 'save success',
      detail: 'save success',
      life: 3000,
    });
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'save error',
      detail: 'save error',
      life: 3000,
    });
    console.error('error:', error);
  } finally {
    isSaving.value = false;
  }
};
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return new Date(Date.UTC(year, month, day));
};
</script>
<style scoped>
.border-bottom-line {
  border-bottom: 0.0625rem solid #efefef;
}
.border-right-line {
  border-right: 0.0625rem solid #efefef;
}
.border-left-line {
  border-left: 0.0625rem solid #efefef;
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
