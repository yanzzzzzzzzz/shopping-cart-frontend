<template>
  <div class="register-container border-round-lg">
    <div class="register-card">
      <h2 class="register-title">註冊</h2>
      <form @submit.prevent="handleRegister" class="register-form gap-3">
        <div class="form-group">
          <FloatLabel>
            <InputText
              id="username"
              v-model="username"
              class="w-full"
              :invalid="usernameInvalid"
            />
            <label for="username">用戶名</label>
          </FloatLabel>
          <small v-if="usernameInvalid">username is invalid.</small>
        </div>
        <div class="form-group">
          <FloatLabel>
            <InputText
              id="email"
              v-model="email"
              class="w-full"
              :invalid="emailInvalid"
            />
            <label for="email">電子郵件</label>
          </FloatLabel>
          <small v-if="emailInvalid">電子郵件格式不正確。</small>
        </div>
        <div class="form-group">
          <FloatLabel>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              class="w-full"
              :invalid="passwordInvalid"
            />
            <label for="password">密碼</label>
          </FloatLabel>
          <small v-if="passwordInvalid">password is invalid.</small>
        </div>
        <div class="form-group">
          <FloatLabel>
            <Password
              id="passwordConfirm"
              v-model="passwordConfirm"
              :feedback="false"
              toggleMask
              class="w-full"
              :invalid="passwordConfirmInvalid"
            />
            <label for="passwordConfirm">確認密碼</label>
          </FloatLabel>
          <small v-if="passwordConfirmInvalid">密碼與確認密碼不相符。</small>
        </div>

        <Button type="submit" label="註冊" class="w-full" />
      </form>
      <div class="social-login">
        <p class="text-center my-3">或使用以下方式註冊</p>
        <div class="flex justify-content-between">
          <Button
            class="p-button-outlined w-full mr-2"
            @click="handleFacebookRegister"
          >
            <i class="pi pi-facebook mr-2"></i>
            Facebook
          </Button>
          <Button
            class="p-button-outlined w-full ml-2"
            @click="handleGoogleRegister"
          >
            <i class="pi pi-google mr-2"></i>
            Google
          </Button>
        </div>
      </div>
      <div class="login-link">
        已有帳號？ <router-link to="/auth/login">立即登入</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { register } from '@/api/user.api';
import { RegisterModel } from '@/Model/type';
import router from '@/router';
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const email = ref('');
const usernameInvalid = ref(false);
const passwordInvalid = ref(false);
const passwordConfirmInvalid = ref(false);
const emailInvalid = ref(false);

const handleRegister = async () => {
  try {
    console.log('Register attempt', {
      username: username.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
      email: email.value,
    });
    if (validateInputs()) {
      return;
    }

    const registerModel: RegisterModel = {
      username: username.value,
      password: password.value,
      email: email.value,
    };
    const res = await register(registerModel);
    localStorage.setItem('token', res.token);
    router.push('/');
  } catch (error: any) {
    console.log('error', error.response.data.error);
    switch (error.response.data.error) {
      case 'Username, password, and email are required':
        usernameInvalid.value = true;
        emailInvalid.value = true;
        passwordInvalid.value = true;
        break;
      case 'Password must be at least 6 characters long':
        passwordInvalid.value = true;
        break;
      default:
        break;
    }
  }
};
const validateInputs = () => {
  const fields = [
    { value: username.value, invalid: usernameInvalid },
    { value: password.value, invalid: passwordInvalid },
    { value: email.value, invalid: emailInvalid },
    { value: passwordConfirm.value, invalid: passwordConfirmInvalid },
  ];
  fields.forEach((field) => {
    field.invalid.value = field.value === '';
  });
  // 新增電子郵件格式檢查
  emailInvalid.value = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  // 新增密碼與確認密碼相同的檢查
  passwordConfirmInvalid.value = password.value !== passwordConfirm.value;

  return fields.some((field) => field.invalid.value);
};
const handleGoogleRegister = () => {
  // 處理Google註冊邏輯
  console.log('Google register attempt');
};

const handleFacebookRegister = () => {
  // 處理Facebook註冊邏輯
  console.log('Facebook register attempt');
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  margin: 75px auto;
}

.register-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.register-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #2196f3;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
