<template>
  <div class="card flex justify-center">
    <PanelMenu :model="items" class="w-13rem gap-0">
      <template #item="{ item }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            class="flex align-items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-1 no-underline text-primary"
            :href="href"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          class="flex align-items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-1 no-underline text-primary"
          :href="item.url"
          :target="item.target"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PanelMenu from 'primevue/panelmenu';
const router = useRouter();

const items = ref([
  {
    label: '我的帳戶',
    icon: 'pi pi-user',
    command: () => {
      router.push({ name: 'userInfo' });
    },
    items: [
      {
        label: '個人檔案',
        route: '/user/account/profile',
      },
      {
        label: '銀行帳號/信用卡',
        route: '/user/account/payment',
      },
      {
        label: '地址',
        route: '/user/account/address',
      },
      {
        label: '更改密碼',
        route: '/user/account/password',
      },
      {
        label: '隱私設定',
        route: '/user/setting/privacy',
      },
    ],
  },
  {
    label: '購買清單',
    icon: 'pi pi-receipt',
    command: () => {
      router.push({ name: 'purchase' });
    },
  },
]);
</script>
<style scoped>
:deep(.p-panelmenu-panel) {
  background-color: transparent !important;
  border-color: transparent;
}
</style>
