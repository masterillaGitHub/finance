import {defineStore} from 'pinia'
import Currency from "@/models_resources/models/Currency.js";

export const useCreateStore = defineStore('transactions/create', {
    state: () => ({
        amount: 0,
        currency: new Currency(),
        type: null,
        account: null,
        category: null,
    }),
    getters: {},
    actions: {
    },
})
