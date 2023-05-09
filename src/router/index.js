import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'index',
      component: () => import('../views/skills/index.vue')
    },
    {
      path: '/skills/create',
      name: 'create',
      component: () => import('../views/skills/create.vue')
    },
    {
      path: '/skills/:id/edit',
      name: 'edit',
      component: () => import('../views/skills/edit.vue'),
      props: true,
    }
    
  ]
})

export default router
