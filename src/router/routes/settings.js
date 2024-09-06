import {LAYOUT_ACCOUNT_FULLSCREEN} from "@/helpers/constants.js";

const Settings = () => import('@/views/account/settings/Index.vue')
const Profile = () => import('@/views/account/settings/Profile.vue')
const Categories = () => import('@/views/account/settings/categories/Index.vue')
const Tags = () => import('@/views/account/settings/tags/Index.vue')

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
    {
        path: '/settings/tags',
        name:'settings.tags',
        component: Tags,
        meta: {
            title: 'Теги',
            layout: LAYOUT_ACCOUNT_FULLSCREEN
        }
    },
]
