export const BASE_URL = import.meta.env.VITE_APP_API_URL
export const STORAGE_URL = import.meta.env.VITE_APP_API_URL + '/storage'

export const MODEL_UPDATE_ALL = 1
export const MODEL_UPDATE_ENTITY = 2
export const MODEL_UPDATE_FIELD = 3

export const LAYOUT_ACCOUNT = 'Account'
export const LAYOUT_ACCOUNT_FULLSCREEN = 'AccountFullscreen'
export const LAYOUT_MAIN = 'Main'
export const LAYOUT_AUTH = 'Auth'

export const TRANSACTION_CATEGORY_ID_INITIAL = 1
export const TRANSACTION_CATEGORY_ID_CORRECTION = 2
export const TRANSACTION_CATEGORY_ID_EXPENSIVE = 3
export const TRANSACTION_CATEGORY_ID_INCOME = 4
export const TRANSACTION_CATEGORY_ID_TRANSFER = 5

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

export const TYPE_ID_EXPENSE = 1
export const TYPE_ID_INCOME = 2
export const TYPE_ID_TRANSFER = 3

export const TRANSACTION_TYPES = [
    { id: TYPE_ID_EXPENSE, icon: CURRENCY_ICONS[0], name: 'Витрата'},
    { id: TYPE_ID_INCOME, icon: CURRENCY_ICONS[1], name: 'Дохід'},
    { id: TYPE_ID_TRANSFER, icon: CURRENCY_ICONS[2], name: 'Переказ'},
]
