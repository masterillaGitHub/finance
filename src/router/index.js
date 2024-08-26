import {createRouter, createWebHistory} from 'vue-router'
import beforeEach from './router_before_each.js'
import {LAYOUT_AUTH, LAYOUT_MAIN} from "@/helpers/constants.js";
import accounts from '@/router/routes/accounts.js'
import transactions from '@/router/routes/transactions.js'
import settings from '@/router/routes/settings.js'

const Main = () => import('@/views/Main.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
const Dashboard = () => import('@/views/account/Dashboard.vue')
const Budgets = () => import('@/views/account/Budgets.vue')

const routes = [
  {path: '/main', name:'main', component: Main, meta: {isPublic: true, layout: LAYOUT_MAIN}},
  {path: '/login', name:'login', component: Login, meta: {isPublic: true, layout: LAYOUT_AUTH}},
  {path: '/register', name:'register', component: Register, meta: {isPublic: true, layout: LAYOUT_AUTH}},

  {path: '/', name:'dashboard', component: Dashboard},

  {path: '/budgets', name:'budgets.index', component: Budgets, meta: {title: 'Бюджет'}},
]
.concat(
    accounts,
    transactions,
    settings,
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(beforeEach)

export default router
