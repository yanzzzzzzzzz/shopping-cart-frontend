<template>
  <div class="layout">
    <Navbar />
    <HeaderWithSearch />
    <div class="container">
      <main class="content">
        <SideMenu class="pr-3" />
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderWithSearch from '@/components/HeaderWithSearch.vue';
import Navbar from '@/components/Navbar.vue';
import SideMenu from '@/components/SideMenu.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 1200px;
  background-color: whitesmoke;
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
