import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";

const Accounts = () => import('@/views/account/accounts/Index.vue')
const AccountsShow = () => import('@/views/account/accounts/Show.vue')

export default [

    {path: '/accounts', name:'accounts.index', component: Accounts, meta: {title: 'Рахунки'}},
    {
        path: '/accounts/:id/show',
        name:'accounts.show',
        component: AccountsShow,
        meta: {layout: LAYOUT_ACCOUNT_FULLSCREEN},
    },
]
