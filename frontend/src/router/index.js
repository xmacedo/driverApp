import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TesteView from '../views/TesteView.vue'
import ResultadosView from '../views/ResultadosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/teste',
    name: 'teste',
    component: TesteView
  },
  {
    path: '/resultados',
    name: 'resultados',
    component: ResultadosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
