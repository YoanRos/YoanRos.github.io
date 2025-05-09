import { createRouter, createWebHistory } from 'vue-router'
import Oz from '../views/Projects/Oz.vue'
import Welcome from '@/views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/oz',
    name: 'Oz',
    component: Oz,
  },
  // Add other routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
