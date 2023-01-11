import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~~/src/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('~/pages/about.vue'),
    },
    {
      path: '/hi/:name',
      name: 'hi',
      component: () => import('~/pages/hi.vue'),
    },
  ],
})

export default router
