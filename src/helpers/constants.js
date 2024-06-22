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
export const CURRENCY_ICONS = [
    { id: 1, icon: 'mdi-currency-uah'},
    { id: 2, icon: 'mdi-currency-usd'},
    { id: 3, icon: 'mdi-currency-eur'},
]
export const TRANSACTION_TYPES = [
    { id: 1, icon: 'mdi-currency-uah', name: 'Витрата'},
    { id: 2, icon: 'mdi-currency-usd', name: 'Дохід'},
    { id: 3, icon: 'mdi-currency-eur', name: 'Переказ'},
]
