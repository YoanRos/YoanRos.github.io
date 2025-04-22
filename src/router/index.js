import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Oz from '../views/Oz.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects,
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
