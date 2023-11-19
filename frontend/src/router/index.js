import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TesteView from '../views/TesteView.vue'
import ResultadosView from '../views/ResultadosView.vue'
import ContratoView from '@/views/ContratoView'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
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
  },
  {
    path: '/',
    name: 'contrato',
    component: ContratoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
