import {defineStore} from 'pinia'
import BankManagerResource from "@/models_resources/resources/BankManagerResource.js";
import {toCurrency} from "@/helpers/functions.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import BankAccountResource from "@/models_resources/resources/BankAccountResource.js";

export const useCreateStore = defineStore('bank-accounts/mono/create', {
    state: () => ({
        accountsLoading: false,
        accounts: [],
        selectedAccountsIds: [],
    }),
    getters: {
        getAccounts: state => state.accounts.map(a => prepareData(a))
    },
    actions: {
        async loadAccountsByBankId(bankId) {
            this.accountsLoading = true

            try {
                const response = await BankManagerResource.getAccounts(bankId)
                this.accounts = response.data.data
            }
            finally {
                this.accountsLoading = false
            }
        },
        async saveAccounts(bankId) {
            const accounts = this.selectedAccountsIds
                .map(id => this.accounts.find(a => a.id === id))
                .map(account => ({
                    idOrigin: account.id,
                    name: `Mono ${account.currency}, ${account.type}`,
                    currencyCode: account.currencyCode,
                    creditLimit: account.creditLimit
                }))

            console.log('accounts', accounts)
            await BankAccountResource.store({bankId, accounts})
        }
    },
})

const prepareData = data => {
    const {toDecimal} = useCurrencyDecimalConvert()
    const isCredit = data.creditLimit > 0
    let balance = data.balance
    let availableBalance = 0

    if (isCredit) {
        balance = data.balance - data.creditLimit
        availableBalance = data.balance
    }

    return {
        id: data.id,
        isCredit,
        balance: toCurrency(toDecimal(balance), data.currency),
        availableBalance: toCurrency(toDecimal(availableBalance), data.currency),
        maskedPan: data.maskedPan,
        name: `Mono ${data.currency}, ${data.type}`,
    }
}
