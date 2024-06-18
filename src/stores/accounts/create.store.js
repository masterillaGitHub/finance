import {defineStore} from 'pinia'
import Account from "@/models_resources/models/Account.js";
import AccountSum from "@/models_resources/models/AccountSum.js";

export const useCreateStore = defineStore('accounts/create', {
    state: () => ({
        account: null,
        sums: [],

    }),
    getters: {},
    actions: {
        createAccount(categoryId) {
            const account = new Account()
            account.category = categoryId

            this.account = account
        },
        reset() {
            this.resetAccount()
            this.resetAccountSum()

            console.info('account and account sums were reset')
        },
        resetAccount() {
            this.account = null
        },
        resetAccountSum() {
            this.sums = []
        },
        createAccountSum(currencyId) {
            const sum = new AccountSum()
            sum.balance = 0
            sum.currency = currencyId

            this.sums.push(sum)
        },
        deleteAccountSum(sum) {
            this.sums.splice(this.sums.indexOf(sum), 1)
        },
        async saveAccount() {
            this.account.currency = this.sums[0].currency.id

            const accountId = await this.account.save({
                include: 'sums'
            })

            await this.saveAccountSums(accountId)
        },

        async saveAccountSums(accountId) {
            if (!accountId) {
                return
            }

            for (const accountSum of this.sums) {
                accountSum.account = accountId
                await accountSum.save({
                    include: 'currency'
                })
            }
        },
    },
})
