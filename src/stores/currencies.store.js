import {defineStore} from 'pinia'
import Currency from "@/models_resources/models/Currency.js";

export const useCurrenciesStore = defineStore('currencies', {
    state: () => ({
        loading: false,
    }),
    getters: {
        currencies: () => Currency.findLoaded(),
    },
    actions: {
        async loadCurrencies() {
            if (this.currencies.length === 3) {
                return
            }

            this.loading = true

            try {
                await Currency.sync()
            }
            finally {
                this.loading = false
            }
        }
    },
})
