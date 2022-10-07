import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import store from '@/store/index.js';
import RegisterView from '../views/RegisterView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name : 'barang',
        component: () => import('../views/BarangView.vue'),
      },
      {
        path: '/supplier',
        name : 'supplier',
        component: () => import('../views/Supplier.vue'),
      },

    ]
  },
  {
    path: '/tambahbarang',
    name : 'tambahBarang',
    component: () => import('../views/TambahBarang.vue'),
  },
  {
    path: '/tambahSupplier',
    name : 'tambahSupplier',
    component: () => import('../views/TambahSupplier.vue'),
  },
  {
    path: '/barang/:id',
    name : 'editBarang',
    component: () => import('../views/EditBarang.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
if(!store.state.token && !to.name === 'home' && !to.name ==='Register'){
  router.push('/')
}else next()

})
router.beforeEach((to,from,next)=>{
  if(store.state.token && to.name === 'home'){
    router.push('/dashboard')
  }else next()
  
  })

export default router
