import {defineStore} from 'pinia'
import Currency from "@/models_resources/models/Currency.js";
import {TRANSACTION_TYPES} from "@/helpers/constants.js";
import Account from "@/models_resources/models/Account.js";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useDateFormat} from "@/composables/date_format.js";
import {nextStep, STEP_CLOSED} from "@/services/transaction/step_transition_service.js";
import valid from "@/services/transaction/step_validate_service.js";
import Transaction from "@/models_resources/models/Transaction.js";
import TransactionTag from "@/models_resources/models/TransactionTag.js";

const dateFormat = useDateFormat()

export const useFormStore = defineStore('transactions/form', {
    state: () => ({
        openStep: STEP_CLOSED,
        amount: 0,
        currencyId: null,
        typeId: null,
        accountId: null,
        categoryId: null,
        description: null,
        tagIds: [],
        date: null,
        note: null,
        toAccountId: null,
        toCurrencyId: null,
        toAmount: 0,
        isEnabledValidate: false,

        transactionId: null,
        transferTransactionId: null,
    }),
    getters: {
        getTransaction: state => state.transactionId
            ? Transaction.find(state.transactionId)
            : new Transaction(),
        getTransferTransaction: state => state.transferTransactionId
            ? Transaction.find(state.transferTransactionId)
            : new Transaction(),
        getCurrency: state => Currency.find(state.currencyId) ?? new Currency(),
        getToCurrency: state => Currency.find(state.toCurrencyId) ?? new Currency(),
        getType: state =>
            TRANSACTION_TYPES.find(t => t.id === state.typeId) ?? null,
        getAccount: state => Account.find(state.accountId) ?? new Account(),
        getToAccount: state => Account.find(state.toAccountId) ?? new Account(),
        getCategory: state => TransactionCategory.find(state.categoryId) ?? new TransactionCategory(),
        getTags: state => TransactionTag.findIn(state.tagIds) ?? [],
        getDate: state => state.date ? dateFormat.text(state.date) : null,

        isValid: state => valid.check(state),
        isAmountValid: state => valid.amount(state),
        isAccountValid: state => valid.account(state),
        isToAccountValid: state => valid.toAccount(state),
        isCategoryValid: state => valid.category(state),
    },
    actions: {
        nextStep() {
            nextStep(this)
        },
        reset() {
            this.openStep = STEP_CLOSED
            this.amount = 0
            this.currencyId = null
            this.typeId = null
            this.accountId = null
            this.categoryId = null
            this.description = null
            this.tagIds = []
            this.date = null
            this.toCurrencyId = null
            this.toAccountId = null
            this.toAmount = 0
            this.isEnabledValidate = false
        }
    },
})


