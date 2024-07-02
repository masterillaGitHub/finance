import {defineStore} from 'pinia'
import Currency from "@/models_resources/models/Currency.js";
import {TRANSACTION_TYPES} from "@/helpers/constants.js";
import Account from "@/models_resources/models/Account.js";
import {isEmpty, isNull} from "@/helpers/validators/index.js";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useDateFormat} from "@/composables/date_format.js";

const dateFormat = useDateFormat()
export const STEP_CLOSED = null
export const STEP_TYPE = 0
export const STEP_ACCOUNT = 1
export const STEP_CATEGORY = 2
export const STEP_TAG = 3

export const useCreateStore = defineStore('transactions/create', {
    state: () => ({
        openStep: STEP_ACCOUNT,
        amount: 0,
        currencyId: 1,
        typeId: 1,
        accountId: null,
        categoryId: null,
        tagIds: [],
        date: new Date(),
    }),
    getters: {
        getCurrency: state => Currency.find(state.currencyId) ?? null,
        getType: state =>
            TRANSACTION_TYPES.find(t => t.id === state.typeId) ?? null,
        getAccount: state => Account.find(state.accountId) ?? null,
        getCategory: state => TransactionCategory.find(state.categoryId) ?? null,
        getDate: state => dateFormat.text(state.date)
    },
    actions: {
        setStep(idx) {
            this.openStep = idx
        },
        nextStep() {
            const current = this.openStep

            if (current === STEP_TYPE) {
                this.openStep = isNull(this.accountId) ? STEP_ACCOUNT : STEP_CATEGORY
            }
            else if (current === STEP_ACCOUNT) {
                if (isNull(this.categoryId)) {
                    this.openStep = STEP_CATEGORY
                }
                else if (isEmpty(this.tags)){
                    this.openStep = STEP_TAG
                }
                else {
                    this.openStep = STEP_CLOSED
                }
            }
            else if (current === STEP_CATEGORY) {
                if (isEmpty(this.tags)){
                    this.openStep = STEP_TAG
                }
                else {
                    this.openStep = STEP_CLOSED
                }
            }
            else {
                this.openStep = STEP_CLOSED
            }

        },
        reset() {
            this.amount = 0
            this.currencyId = 1
            this.typeId = 1
            this.accountId = null
            this.categoryId = null
            this.tagIds = []
            this.date = new Date()
        }
    },
})