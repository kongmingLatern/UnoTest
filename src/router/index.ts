import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/back',
      component: () => import('@/pages/Home.vue'),
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('@/pages/Back.vue')
    }
  ]
})

export default router
