export const BASE_URL = import.meta.env.VITE_APP_API_URL
export const STORAGE_URL = import.meta.env.VITE_APP_API_URL + '/storage'

export const MODEL_UPDATE_ALL = 1
export const MODEL_UPDATE_ENTITY = 2
export const MODEL_UPDATE_FIELD = 3

export const LAYOUT_ACCOUNT = 'Account'
export const LAYOUT_ACCOUNT_FULLSCREEN = 'AccountFullscreen'
export const LAYOUT_MAIN = 'Main'
export const LAYOUT_AUTH = 'Auth'


export const ACCOUNT_CATEGORY_ICONS = [
    { id: 1, icon: 'mdi-cash'},
    { id: 2, icon: 'mdi-credit-card-outline'},
    { id: 3, icon: 'mdi-account-cash-outline'},
    { id: 4, icon: 'mdi-cash-register'},
]

export const STORAGE_NAME_ACCOUNT_CATEGORIES = 'account_categories'
export const STORAGE_NAME_ACCOUNT_CATEGORIES_INDEX = 'account_categories_index'
