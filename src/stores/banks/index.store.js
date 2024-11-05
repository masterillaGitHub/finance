import {defineStore} from 'pinia'
import Bank from "@/models_resources/models/Bank.js";

export const useIndexStore = defineStore('banks/index', {
    state: () => ({
        bankId: null,
        bankLoading: false,
    }),
    getters: {
        getBanks: () => Bank.findLoaded()
    },
    actions: {
        async loadBanks() {

            this.bankLoading = true

            try {
                await Bank.sync()
            } finally {
                this.bankLoading = false
            }
        },
    },
})
