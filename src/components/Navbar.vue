<template>
  <div class="navbar-top">
    <div class="container">
      <div class="left">
        <a>賣家中心</a>
        <div>
          <a>下載</a>
        </div>
        <div>聯絡我們</div>
        <i class="mr-1 pi pi-facebook"></i>
        <i class="pi pi-instagram"></i>
      </div>
      <ul class="right">
        <li>通知總覽</li>
        <li>幫助中心</li>
        <li>繁體中文</li>
        <li v-if="!isLoggedIn">
          <router-link :to="{ name: 'login' }">登入</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link :to="{ name: 'register' }">註冊</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="register">Hi,{{ userName }}</router-link>
        </li>
        <li v-if="isLoggedIn">
          <a @click="logout" class="cursor-pointer">登出</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { profile } from '@/api/user.api';
import { useRouter } from 'vue-router';
const isLoggedIn = ref(false);
const userName = ref('');
const router = useRouter();
onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const profileModel = await profile(token);
      isLoggedIn.value = true;
      userName.value = profileModel.username;
    } else {
      isLoggedIn.value = false;
    }
  } catch (error) {
    isLoggedIn.value = false;
    console.error('profile error:', error);
  }
});
const logout = () => {
  localStorage.removeItem('token');
  isLoggedIn.value = false;
  userName.value = '';
  router.push({
    name: 'login',
  });
};
</script>

<style scoped>
.navbar-top {
  padding: 5px 0;
  background-color: var(--p-primary-color) !important;
  color: var(--p-primary-contrast-color) !important;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.left {
  display: flex;
  align-items: center;
}

.left > * {
  margin-right: 15px;
}

.right {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.right li {
  margin-left: 15px;
}

.navbar-top a,
.navbar-top .right li a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-top a:hover,
.navbar-top .right li a:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
</style>
