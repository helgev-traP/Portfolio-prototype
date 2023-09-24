import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../pages/topPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'topPgae',
      component: TopPage
    },
  ]
})

export default router
