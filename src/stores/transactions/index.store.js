import {defineStore} from "pinia";
import Transaction from "@/models_resources/models/Transaction.js";
import {MODEL_UPDATE_ALL, MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";
import {isEmpty} from "@/helpers/validators/index.js";

export const useIndexStore = defineStore('transaction/index', {
    state: () => ({
        meta: {},
        transactionsLoading: false,
        loadUpdateMode: MODEL_UPDATE_ALL,
        loadPageNumber: 1,
        isFirstLoad: true,
        isEmptyData: false,
        isLoadLock: false,
    }),
    getters: {

    },
    actions: {
        async loadTransactions() {
            if (this.isLoadLock) {
                return
            }

            console.log('load categories')
            this.transactionsLoading = true
            this.isLoadLock = true

            try {
                const response = await Transaction.query()
                    .setUpdateMode(this.loadUpdateMode)
                    .setParams({
                        include: 'category,account',
                        page: this.loadPageNumber,
                    })
                    .get()

                responseHandle(this, response)
            }
            finally {
                this.transactionsLoading = false
                this.isLoadLock = false
            }
        }
    }
})


function responseHandle(store, response) {
    store.meta = response.data.meta
    store.loadPageNumber = (response.data.meta?.current_page ?? 0) + 1
    store.loadUpdateMode = MODEL_UPDATE_ENTITY
    store.isFirstLoad = false
    store.isEmptyData = isEmpty(response.data.data)
}
