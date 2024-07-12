import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";
const Index = () => import('@/views/account/transactions/Index.vue')
const Create = () => import('@/views/account/transactions/Create.vue')
const Edit = () => import('@/views/account/transactions/Edit.vue')

export default [

    {path: '/transactions', name:'transactions.index', component: Index, meta: {title: 'Історія транзакцій'}},
    {
        path: '/transactions/create',
        name:'transactions.create',
        component: Create,
        meta: {
            layout: LAYOUT_ACCOUNT_FULLSCREEN,
            title: 'Додати транзакцію'
        }
    },
    {
        path: '/transactions/:id',
        name:'transactions.edit',
        component: Edit,
        props: true,
        meta: {
            layout: LAYOUT_ACCOUNT_FULLSCREEN,
            title: 'Редагувати транзакцію'
        }
    },
]
