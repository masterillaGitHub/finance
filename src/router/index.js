import { createRouter, createWebHistory } from 'vue-router'
import beforeEach from './router_before_each.js'
import {LAYOUT_ACCOUNT_FULLSCREEN, LAYOUT_AUTH, LAYOUT_MAIN} from "@/helpers/constants.js";

const Main = () => import('@/views/Main.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
const Dashboard = () => import('@/views/account/Dashboard.vue')
const Accounts = () => import('@/views/account/accounts/Index.vue')
const AccountsShow = () => import('@/views/account/accounts/Show.vue')
const Budgets = () => import('@/views/account/Budgets.vue')

const routes = [
  {path: '/', name:'main', component: Main, meta: {isPublic: true, layout: LAYOUT_MAIN}},
  {path: '/login', name:'login', component: Login, meta: {isPublic: true, layout: LAYOUT_AUTH}},
  {path: '/register', name:'register', component: Register, meta: {isPublic: true, layout: LAYOUT_AUTH}},

  {path: '/dashboard', name:'dashboard', component: Dashboard},
  {path: '/accounts', name:'accounts.index', component: Accounts},
  {path: '/accounts/:id/show', name:'accounts.show', component: AccountsShow, meta: {layout: LAYOUT_ACCOUNT_FULLSCREEN}},
  {path: '/budgets', name:'budgets', component: Budgets},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(beforeEach)

export default router
