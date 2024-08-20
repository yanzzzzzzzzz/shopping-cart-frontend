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
        <li>登入</li>
        <li>註冊</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
