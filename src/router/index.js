import Vue from 'vue'
import VueRouter from 'vue-router'
import MoviePage from '../components/MoviePage.vue'
import MainContent from '../components/MainContent.vue'
import Results from '../components/Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'main',
    path: '/',
    component: MainContent,
  },
  {
    name: 'film',
    path: '/movie/:id',
    component: MoviePage,
  },
  {
    name: 'results',
    path: '/search/:text',
    component: Results,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
