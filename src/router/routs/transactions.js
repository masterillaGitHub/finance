import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";
const Index = () => import('@/views/account/transactions/Index.vue')
const Create = () => import('@/views/account/transactions/Create.vue')

export default [

    {path: '/transactions', name:'transactions.index', component: Index},
    {
        path: '/transactions/create',
        name:'transactions.create',
        component: Create,
        meta: {layout: LAYOUT_ACCOUNT_FULLSCREEN}
    },
]
