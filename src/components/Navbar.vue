<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-section navbar-brand">
        <router-link to="/">123 Shop</router-link>
      </div>
      <div class="navbar-section navbar-search">
        <InputText type="text" placeholder="Search..." />

        <div class="popular-searches">
          <span>熱門搜尋：</span>
          <router-link to="/search?q=product1">產品1</router-link>
          <router-link to="/search?q=product2">產品2</router-link>
          <router-link to="/search?q=product3">產品3</router-link>
        </div>
      </div>
      <div class="navbar-section navbar-cart">
        <router-link
          to="/cart"
          class="pi pi-shopping-cart"
          style="font-size: 2.5rem"
        ></router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
</script>

<style scoped>
.navbar {
  background-color: var(--p-primary-color) !important;
  color: var(--p-text-color) !important;
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.navbar-section {
  flex: 1;
}

.navbar-brand {
  text-align: left;
}

.navbar-brand a {
  color: var(--p-primary-contrast-color) !important;
  text-decoration: none;
  font-size: 1.5rem;
}

.navbar-search {
  text-align: center;
}

.navbar-search input {
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: var(--p-border-radius);
  border: none;
}

.popular-searches {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--p-primary-contrast-color) !important;
}

.popular-searches span {
  margin-right: var(--p-inline-spacing);
}

.popular-searches a {
  color: var(--p-text-color-secondary) !important;
  text-decoration: none;
  margin-right: var(--p-inline-spacing);
}

.popular-searches a:hover {
  text-decoration: underline;
}

.navbar-cart {
  text-align: right;
}

.navbar-cart a {
  color: var(--p-primary-contrast-color) !important;
  text-decoration: none;
}
</style>
