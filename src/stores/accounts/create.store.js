import {defineStore} from 'pinia'
import Account from "@/models_resources/models/Account.js";
import {ACCOUNT_TYPE_INTERNAL} from "@/helpers/constants.js";
import {useAppStore} from "@/stores/app.store.js";

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
        createAccountSum(accountSum) {
            this.sums.push(accountSum)
        },
        deleteAccountSum(accountSum) {
            this.sums.splice(this.sums.indexOf(accountSum), 1)
        },
        async saveAccount() {
            const appStore = useAppStore()
            this.account.currency = appStore.getMainCurrency.id

            const accountId = await this.account.save({
                include: 'sums,category'
            })

            if (this.account.place_type === ACCOUNT_TYPE_INTERNAL) {
                await this.saveAccountSums(accountId)
            }
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
