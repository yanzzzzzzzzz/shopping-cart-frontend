<template>
  <div class="layout">
    <Header />
    <div class="container">
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 1200px;
  background-color: var(--p-primary-color) !important;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 1200px; /* Fixed width */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: var(--p-content-padding);
  background-color: var(--p-surface-ground);
  display: flex;
  padding: 20px 0;
}
</style>
