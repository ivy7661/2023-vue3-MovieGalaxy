import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/UserLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/front/HomeView.vue')
        }
      ]
    }
    // {
    //   path: '/adminLogin',
    //   component: () => import('')
    // },
    // {
    //   path: '/admin',
    //   component: () => import(''),
    //   children: [
    //     {
    //       path: 'accounts',
    //       component: () => import('')
    //     }
    //   ]
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('')
    // }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return {
      behavior: 'smooth',
      top: 0
    };
  }
});

export default router;
