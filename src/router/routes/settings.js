import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";

const Settings = () => import('@/views/account/settings/Index.vue')
const Profile = () => import('@/views/account/settings/Profile.vue')
const Categories = () => import('@/views/account/settings/categories/Index.vue')

export default [
    {path: '/settings', name:'settings.index', component: Settings, meta: {title: 'Налаштування'}},
    {
        path: '/settings/profile',
        name:'settings.profile',
        component: Profile,
        meta: {
            title: 'Профіль',
            layout: LAYOUT_ACCOUNT_FULLSCREEN
        }
    },
    {
        path: '/settings/categories',
        name:'settings.categories',
        component: Categories,
        meta: {
            title: 'Категорії',
            layout: LAYOUT_ACCOUNT_FULLSCREEN
        }
    },
]
