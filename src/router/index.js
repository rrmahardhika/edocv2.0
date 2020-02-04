import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
