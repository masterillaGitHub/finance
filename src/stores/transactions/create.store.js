import {defineStore} from 'pinia'
import Currency from "@/models_resources/models/Currency.js";
import {TRANSACTION_TYPES} from "@/helpers/constants.js";
import Account from "@/models_resources/models/Account.js";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useDateFormat} from "@/composables/date_format.js";
import {nextStep, STEP_ACCOUNT} from "@/services/transaction/step_transition_service.js";
import valid from "@/services/transaction/step_validate_service.js";

const dateFormat = useDateFormat()

export const useCreateStore = defineStore('transactions/create', {
    state: () => ({
        openStep: STEP_ACCOUNT,
        amount: 0,
        enrollmentAmount: 0,
        currencyId: 1,
        enrollmentCurrencyId: 0,
        typeId: 1,
        accountId: null,
        accountTransferId: null,
        categoryId: null,
        tagIds: [],
        date: new Date(),
        validate: false,
    }),
    getters: {
        getCurrency: state => Currency.find(state.currencyId) ?? null,
        getEnrollmentCurrency: state => Currency.find(state.enrollmentCurrencyId) ?? null,
        getType: state =>
            TRANSACTION_TYPES.find(t => t.id === state.typeId) ?? null,
        getAccount: state => Account.find(state.accountId) ?? null,
        getAccountTransfer: state => Account.find(state.accountTransferId) ?? null,
        getCategory: state => TransactionCategory.find(state.categoryId) ?? null,
        getDate: state => dateFormat.text(state.date),

        isValid: state => valid.check(state),
        isAmountValid: state => valid.amount(state),
        isAccountValid: state => valid.account(state),
        isAccountTransferValid: state => valid.accountTransfer(state),
        isCategoryValid: state => valid.category(state),
    },
    actions: {
        nextStep() {
            nextStep(this)
        },
        reset() {
            this.amount = 0
            this.currencyId = 1
            this.typeId = 1
            this.accountId = null
            this.accountTransferId = null
            this.categoryId = null
            this.tagIds = []
            this.date = new Date()
        }
    },
})


