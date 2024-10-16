import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ShopView from '@/views/ShopView.vue';
import ProductView from '@/views/ProductView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ShoppingCartView from '@/views/ShoppingCartView.vue';
import { checkTokenValidity } from '@/utils/tokenUtils';
import { useUserStore } from '@/stores/userStore';
import { decodeToken } from '@/utils/tokenUtils';
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: ShopView,
        name: 'home',
      },
      {
        path: 'product/:id',
        component: ProductView,
        name: 'product',
      },
      {
        path: '/cart',
        component: ShoppingCartView,
        name: 'cart',
      },
    ],
  },
  {
    path: '/',
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

const nonRedirectRoutes = ['/', '/login', '/register'];
const isNonRedirectRoute = (path: string) => {
  return nonRedirectRoutes.includes(path) || /^\/product\/\d+$/.test(path);
};
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  console.log('check router');

  const token = localStorage.getItem('token');
  const isNonRedirect = isNonRedirectRoute(to.path);
  if (token) {
    const isValid = await checkTokenValidity(token);
    if (!isValid) {
      console.log('token is invalid, clearing token');
      localStorage.removeItem('token');
      userStore.setLoggedIn(false);

      if (isNonRedirect) {
        return next();
      }
      return next('/login');
    } else {
      const decodedPayload = decodeToken(token);
      console.log('decodedPayload', decodedPayload);
      console.log('decodedPayload?.id', decodedPayload?.id);

      userStore.setUserName(decodedPayload?.username || '');
      userStore.setLoggedIn(true);
      userStore.setId(decodedPayload?.id || 0);
    }
  } else {
    if (!isNonRedirect) {
      console.log('token is null, redirecting to login');
      return next('/login');
    }
  }

  next();
});
export default router;
