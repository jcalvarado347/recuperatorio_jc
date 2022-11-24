import { createRouter, createWebHistory } from 'vue-router'
import Usuario from '../views/Usuario.vue'
import Consumo from '../views/Consumo.vue'

const routes = [
  {
    path: '/',
    name: 'Usuario',
    component: Usuario
  },

  {
    path: '/Consumo',
    name: 'Consumo',
    component: Consumo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router