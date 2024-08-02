<template>
  <div class="layout">
    <Navbar />
    <div class="container">
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
};
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
  width: 1000px; /* Fixed width */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: var(--p-content-padding);
  background-color: var(--p-surface-ground);
}
</style>
