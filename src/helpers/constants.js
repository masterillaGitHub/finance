export const BASE_URL = import.meta.env.VITE_APP_API_URL
export const STORAGE_URL = import.meta.env.VITE_APP_API_URL + '/storage'

export const MODEL_UPDATE_ALL = 1
export const MODEL_UPDATE_ENTITY = 2
export const MODEL_UPDATE_FIELD = 3

export const LAYOUT_ACCOUNT = 'Account'
export const LAYOUT_ACCOUNT_FULLSCREEN = 'AccountFullscreen'
export const LAYOUT_MAIN = 'Main'
export const LAYOUT_AUTH = 'Auth'

export const ACCOUNT_TYPE_INTERNAL = 'internal'
export const ACCOUNT_TYPE_EXTERNAL = 'external'

export const ACCOUNT_TYPES = [
    {label: 'Внутрішній', value: ACCOUNT_TYPE_INTERNAL},
    {label: 'Зовнішній', value: ACCOUNT_TYPE_EXTERNAL},
]

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

export const CURRENCIES = [
    { id: 1, icon: 'mdi-currency-uah', alphabeticCode: 'UAH', numericCode: 980},
    { id: 2, icon: 'mdi-currency-usd', alphabeticCode: 'USD', numericCode: 840},
    { id: 3, icon: 'mdi-currency-eur', alphabeticCode: 'EUR', numericCode: 978},
]

export const TYPE_ID_EXPENSE = 1
export const TYPE_ID_INCOME = 2
export const TYPE_ID_TRANSFER = 3

export const TRANSACTION_TYPES = [
    { id: TYPE_ID_EXPENSE, icon: CURRENCIES[0].icon, name: 'Витрата'},
    { id: TYPE_ID_INCOME, icon: CURRENCIES[1].icon, name: 'Дохід'},
    { id: TYPE_ID_TRANSFER, icon: CURRENCIES[2].icon, name: 'Переказ'},
]
