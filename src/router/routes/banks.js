import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";

const Index = () => import('@/views/account/banks/Index.vue')

export default [
    {
        path: '/banks',
        name:'banks.index',
        component: Index,
        meta: {
            layout: LAYOUT_ACCOUNT_FULLSCREEN
        }
    },
]
