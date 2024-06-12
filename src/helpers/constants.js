export const BASE_URL = import.meta.env.VITE_APP_API_URL
export const STORAGE_URL = import.meta.env.VITE_APP_API_URL + '/storage'

export const MODEL_UPDATE_ALL = 1
export const MODEL_UPDATE_ENTITY = 2
export const MODEL_UPDATE_FIELD = 3

export const LAYOUT_ACCOUNT = 'Account'
export const LAYOUT_ACCOUNT_FULLSCREEN = 'AccountFullscreen'
export const LAYOUT_MAIN = 'Main'
export const LAYOUT_AUTH = 'Auth'

export const ACCOUNT_TYPE_BANK = 'bank'
export const ACCOUNT_TYPE_CASH = 'cash'
export const ACCOUNT_TYPE_OTHER = 'other'
export const ACCOUNT_TYPE_DEBT = 'debt'

export const ACCOUNT_TYPES = [
    { icon: 'mdi-credit-card-outline', title: 'Банківський рахунок', account_type: ACCOUNT_TYPE_BANK },
    { icon: 'mdi-cash', title: 'Готівка', account_type: ACCOUNT_TYPE_CASH },
    { icon: 'mdi-cash-register', title: 'Іншій актив', account_type: ACCOUNT_TYPE_OTHER },
    { icon: 'mdi-account-cash-outline', title: 'Борг', account_type: ACCOUNT_TYPE_DEBT },
]
