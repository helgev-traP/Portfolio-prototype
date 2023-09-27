import { createRouter, createWebHistory } from 'vue-router'
import TopPageRouter from '../pages/topPageRouter.vue'
import ConponentPageTest from '../pages/contentPageTest.vue'
import OtherPage from '../pages/otherPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hidden',
      component: TopPageRouter
    },
    {
      path: '/test',
      name: 'test',
      component: ConponentPageTest
    },
    {
      path: '/other',
      name: 'other',
      component: OtherPage
    },
  ]
})

export default router
