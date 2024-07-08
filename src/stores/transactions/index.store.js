import {defineStore} from "pinia";
import Transaction from "@/models_resources/models/Transaction.js";
import {MODEL_UPDATE_ALL, MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";
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
        async firstLoadTransactions() {
            const response = await loadTransactions(1, MODEL_UPDATE_ALL)

            this.isAccessLazyLoad = isNotEmpty(response.data.data)
            responseHandle(this, response)
        },
        async lazyLoadTransactions() {
            if (this.isLoadLock) {
                return
            }

            this.transactionsLoading = true
            this.isLoadLock = true
            try {
                const response = await loadTransactions(this.nextNumberPage, MODEL_UPDATE_ENTITY)
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

async function loadTransactions(page, updateMode) {
    return await Transaction.query()
        .setUpdateMode(updateMode)
        .setParams({
            include: 'category,account,currency,type,to_account,to_currency',
            page,
        })
        .get()
}

function responseHandle(store, response) {
    store.meta = response.data.meta
    store.isEmptyData = isEmpty(response.data.data)
}
