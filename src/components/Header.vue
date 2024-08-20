<template>
  <nav class="navbar">
    <div class="container mt-3">
      <div class="navbar-section navbar-brand">
        <router-link to="/">123 Shop</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background-color: var(--p-primary-color) !important;
  color: var(--p-text-color) !important;
  padding: 0 0 1rem 0;
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
</style>
