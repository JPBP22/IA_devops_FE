import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import Recipe from '../components/AppAccounts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/',
    name: '',
    component: 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
