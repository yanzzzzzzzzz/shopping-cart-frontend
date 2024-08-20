import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ShopView from '@/views/ShopView.vue';
import ProductView from '@/views/ProductView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

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
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginView,
        name: 'login',
      },
      {
        path: 'register',
        component: RegisterView,
        name: 'register',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
