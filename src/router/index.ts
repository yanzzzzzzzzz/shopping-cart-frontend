import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import ShopView from '../views/ShopView.vue';
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: ShopView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
