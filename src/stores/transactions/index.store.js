import {defineStore} from "pinia";
import Transaction from "@/models_resources/models/Transaction.js";
import {MODEL_UPDATE_FIELD} from "@/helpers/constants.js";
import {isEmpty, isNotEmpty} from "@/helpers/validators/index.js";

export const useIndexStore = defineStore('transaction/index', {
    state: () => ({
        meta: {},
        transactionsLoading: true,
        isEmptyData: false,
        isLoadLock: false,
        isAccessLazyLoad: false,
    }),
    getters: {
        currentNumberPage: state => state.meta?.current_page ?? 1,
        nextNumberPage() {
            return this.currentNumberPage + 1
        },
    },
    actions: {
        async firstLoadTransactions(newParams) {
            const params = Object.assign({
                include: 'category,account,currency,type,to_account,to_currency',
                page: 1,
                sort: '-transaction_at',
            }, newParams)
            const response = await loadTransactions(params)

            this.isAccessLazyLoad = isNotEmpty(response.data.data)
            responseHandle(this, response)
        },
        async lazyLoadTransactions(newParams = {}) {
            if (this.isLoadLock) {
                return
            }

            this.transactionsLoading = true
            this.isLoadLock = true
            try {
                const params = Object.assign({
                    include: 'category,account,currency,type,to_account,to_currency',
                    page: this.nextNumberPage,
                    sort: '-transaction_at',
                }, newParams)

                const response = await loadTransactions(params)
                responseHandle(this, response)
            }
            finally {
                this.transactionsLoading = false
                this.isLoadLock = false
            }
        },
        reset() {
            this.isEmptyData = false
            this.isAccessLazyLoad = false
        }
    }
})

async function loadTransactions(params) {
    return await Transaction.query()
        .setUpdateMode(MODEL_UPDATE_FIELD)
        .setParams(params)
        .get()
}

function responseHandle(store, response) {
    store.meta = response.data.meta
    store.isEmptyData = isEmpty(response.data.data)
}
