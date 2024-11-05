import {defineStore} from 'pinia'
import Bank from "@/models_resources/models/Bank.js";
import BankConnection from "@/models_resources/models/BankConnection.js";

export const useBankCreateStore = defineStore('accounts/bank-create', {
    state: () => ({
        bankId: null,
        bankLoading: false,
        token: 'uivZZwLaHq1DvHd0kHWLB_Oq9QmFuzG71v6_5f5HnjqI',
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
        async storeBankConnection() {
            const connect = new BankConnection()
            connect.token = this.token
            connect.bank = this.bankId

            await connect.save()
        },
    },
})

const prepareBankAccounts = accounts => accounts.map(a => ({
    name: ''
}))
