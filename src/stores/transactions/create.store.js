import {defineStore} from "pinia";
import Transaction from "@/models_resources/models/Transaction.js";
import {MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";

const state = () => ({

})

const getters = {

}

const actions = {
    async loadTransactionById(id) {
        const includes = [
            'category',
            'account',
            'currency',
            'type',
            'tags',
            'transfer_transaction.category',
            'transfer_transaction.currency',
            'transfer_transaction.type',
            'transfer_transaction.account',
            'transfer_transaction.tags',
        ]
        const response = await Transaction.query()
            .setUpdateMode(MODEL_UPDATE_ENTITY)
            .setParams({
                include: includes.join(','),
                'filter[id]': id,
            })
            .get()

        return response.data.data[0] ?? null
    }
}

export const useCreateStore = defineStore('transaction/create', {
    state,
    getters,
    actions
})