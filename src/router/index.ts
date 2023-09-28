import { createRouter, createWebHistory } from 'vue-router'
import TopPageRouter from '../pages/TopPageRouter.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import WorkShop from '../pages/WorkShop.vue'
import Programing from '../pages/Programing.vue'
import Movie from '../pages/Movie.vue'
import Music from '../pages/Music.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hidden',
      component: TopPageRouter
    },{
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/blog',
      name: 'blog',
      component: Blog
    },{
      path: '/workshop',
      name: 'workshop',
      component: WorkShop
    },{
      path: '/programing',
      name: 'programing',
      component: Programing
    },{
      path: '/movie',
      name: 'movie',
      component: Movie
    },{
      path: '/music',
      name: 'music',
      component: Music
    },
  ]
})

export default router
