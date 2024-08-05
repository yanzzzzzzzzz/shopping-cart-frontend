import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ShopView from '@/views/ShopView.vue';
import ProductView from '@/views/ProductView.vue';
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: ShopView,
      },
      {
        path: 'product/:id',
        component: ProductView,
        name: 'product',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
