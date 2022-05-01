import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/customer/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/customer/Home.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/customer/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/customer/Cart.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/customer/Login.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/customer/Checkout.vue'),
        children: [
          {
            path: 'delivery',
            name: 'delivery',
            component: () => import('@/views/customer/Delivery.vue'),
          },
          {
            path: 'pay',
            name: 'pay',
            component: () => import('@/views/customer/Payment.vue'),
          },
          {
            path: 'confirm',
            name: 'confirm',
            component: () => import('@/views/customer/Confirm.vue'),
          },
        ],
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('@/views/customer/Success.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'hover',
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
