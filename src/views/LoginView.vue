<template>
  <div class="login-container border-round-lg">
    <div class="login-card">
      <h2 class="login-title">登入</h2>
      <form @submit.prevent="handleLogin" class="login-form gap-3">
        <div
          v-if="errorMessage"
          class="mb-4 p-2 flex align-items-center justify-content-center"
          style="
            background-color: #fff9fa;
            border: 1px solid rgba(255, 66, 79, 0.2);
          "
        >
          <i class="pi pi-times-circle pr-2" style="color: red"></i
          >{{ errorMessage }}
        </div>
        <div class="form-group">
          <FloatLabel>
            <InputText id="username" v-model="username" class="w-full" />
            <label for="username">用戶名</label>
          </FloatLabel>
        </div>
        <div class="form-group">
          <FloatLabel>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              class="w-full"
            />
            <label for="password">密碼</label>
          </FloatLabel>
        </div>
        <div class="form-group flex align-items-center justify-content-between">
          <div>
            <Checkbox v-model="rememberMe" :binary="true" id="rememberMe" />
            <label for="rememberMe" class="ml-2">記住我</label>
          </div>
          <a href="#" class="forgot-password">忘記密碼？</a>
        </div>
        <Button
          type="submit"
          label="登入"
          class="w-full"
          :disabled="!username || !password"
        />
      </form>
      <div class="social-login">
        <p class="text-center my-3">或使用以下方式登入</p>
        <div class="flex justify-content-between">
          <Button
            class="p-button-outlined w-full mr-2"
            @click="handleFacebookLogin"
          >
            <i class="pi pi-facebook mr-2"></i>
            Facebook
          </Button>
          <Button
            class="p-button-outlined w-full ml-2"
            @click="handleGoogleLogin"
          >
            <i class="pi pi-google mr-2"></i>
            Google
          </Button>
        </div>
      </div>
      <div class="register-link">
        還沒有帳號？ <router-link to="/auth/register">立即註冊</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import { login, tokenIsExpired } from '@/api/user.api';
import { LoginModel } from '@/Model/type';
import { useRouter } from 'vue-router';
const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');
const router = useRouter();
const handleLogin = async () => {
  try {
    const loginData: LoginModel = {
      username: username.value,
      password: password.value,
    };
    const res = await login(loginData);
    if (res.token) {
      localStorage.setItem('token', res.token);
    }
    router.push('/');
  } catch (error: any) {
    errorMessage.value = error.response.data.error;
  }
};

const handleFacebookLogin = () => {
  console.log('Facebook login attempt');
};

const handleGoogleLogin = () => {
  console.log('Google login attempt');
};

const checkTokenValidity = async (token: string) => {
  const isExpired = await tokenIsExpired(token);
  if (isExpired) {
    localStorage.removeItem('token');
    alert('您的登入已過期，請重新登入');
    return false;
  }
  return true;
};

onMounted(async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const isValid = await checkTokenValidity(token);
    if (!isValid) {
      router.push('/login');
    }
    router.push('/');
  }
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  margin: 75px auto;
}

.login-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.forgot-password {
  color: #2196f3;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

.register-link {
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
