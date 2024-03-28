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
        },
        {
          path: 'login',
          component: () => import('@/views/front/LoginView.vue')
        },
        {
          path: 'signup',
          component: () => import('@/views/front/SignUp.vue')
        },
        {
          path: 'search',
          component: () => import('@/views/front/SearchMovie.vue')
        },
        {
          path: 'movies/:id',
          component: () => import('@/views/front/MovieDetail.vue')
        },
        {
          // posts/:id
          path: 'movies/posts/:id',
          component: () => import('@/views/front/PostList.vue')
        }
      ]
    }
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
