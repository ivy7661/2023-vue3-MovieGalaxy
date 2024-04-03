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
          path: 'movies/posts/:id',
          component: () => import('@/views/front/PostList.vue')
        },
        {
          path: 'user',
          component: () => import('@/views/front/UserView.vue'),
          children: [
            {
              path: 'userInfo',
              component: () => import('@/views/front/UserInfo.vue')
            },
            {
              path: 'userPost',
              component: () => import('@/views/front/UserPost.vue')
            }
          ]
        },
        {
          path: 'aboutUs',
          component: () => import('@/views/front/AboutUs.vue'),
          children: [
            {
              path: 'operationPrinciple',
              component: () => import('@/views/front/OperationPrinciple.vue')
            },
            {
              path: 'QA',
              component: () => import('@/views/front/QA.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/layout/AdminView.vue'),
      children: [
        {
          path: 'accounts',
          component: () => import('@/views/admin/AccountsAdmin.vue')
        },
        {
          path: 'movies',
          component: () => import('@/views/admin/MoviesAdmin.vue')
        },
        {
          path: 'posts',
          component: () => import('@/views/admin/PostsAdmin.vue')
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
