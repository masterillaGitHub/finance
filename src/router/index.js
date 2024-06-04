import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import('@/views/Main.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
const Dashboard = () => import('@/views/account/Dashboard.vue')

const routes = [
  {path: '/', name:'main', component: Main, meta: {isPublic: true, layout: 'Main'}},
  {path: '/login', name:'login', component: Login, meta: {isPublic: true, layout: 'Auth'}},
  {path: '/register', name:'register', component: Register, meta: {isPublic: true, layout: 'Auth'}},

  {path: '/dashboard', name:'dashboard', component: Dashboard},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const isPageAccess = to.meta.isPublic ?? false

  if (!isPageAccess) {
    return {name: 'login'}
  }

})

export default router
