import {defineStore} from 'pinia'
import Account from "@/models_resources/models/Account.js";

export const useShowStore = defineStore('accounts/show', {
    state: () => ({
        editDialog: false,
        accountId: null,
        accountLoading: false,
    }),
    getters: {
        getAccount: state => Account.find(state.accountId) ?? new Account(),
    },
    actions: {
        async loadAccount(accountId) {
            this.accountLoading = true

            try {
                this.accountId = await Account.sync({
                    include: 'category,sums.currency',
                    'filter[id]': accountId
                })
            }
            finally {
                this.accountLoading = false
            }
        }
    },
})
