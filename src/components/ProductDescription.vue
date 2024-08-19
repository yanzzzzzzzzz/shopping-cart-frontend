<template>
  <div class="bg-white p-5" v-html="desc"></div>
</template>
<script setup lang="ts">
defineProps<{
  desc: string | undefined;
}>();
</script>
