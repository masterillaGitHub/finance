import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";

const Create = () => import('@/views/account/bank_accounts/Create.vue')

export default [
    {
        path: '/bank-accounts/create',
        name:'bank-accounts.create',
        component: Create,
        meta: {
            layout: LAYOUT_ACCOUNT_FULLSCREEN
        }
    },
]
