import { createRouter, createWebHistory } from 'vue-router'
import InitView from '../views/InitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: InitView
    }
  ]
})

export default router
