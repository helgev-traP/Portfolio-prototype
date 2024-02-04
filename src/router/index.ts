import { createRouter, createWebHistory } from 'vue-router'

// TopPage
import RouterWhenTopPageIsFocused from '../pages/RouterWhenTopPage.vue'

// About
import About from '../pages/About/About.vue'

// Blog
import Blog from '../pages/Blog/Blog.vue'

// WorkShop
import WorkShop from '../pages/WorkShop/WorkShop.vue'

// Programing
import Programming from '../pages/Programming/Programming.vue'

// Movie
import Movie from '../pages/Movie/Movie.vue'

// Music
import Music from '../pages/Music/Music.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hidden',
      component: RouterWhenTopPageIsFocused
    }, {
      path: '/about',
      name: 'about',
      component: About,
    }, {
      path: '/blog',
      name: 'blog',
      component: Blog,
    }, {
      path: '/workshop',
      name: 'workshop',
      component: WorkShop,
    }, {
      path: '/programming',
      name: 'programming',
      component: Programming,
    }, {
      path: '/movie',
      name: 'movie',
      component: Movie,
    }, {
      path: '/music',
      name: 'music',
      component: Music,
    },
  ]
})

export default router
