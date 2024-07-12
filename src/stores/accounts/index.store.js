import {defineStore} from 'pinia'
import AccountCategory from "@/models_resources/models/AccountCategory.js";

export const useIndexStore = defineStore('accounts/index', {
    state: () => ({
        amountTotal: 0,
        accountsPanelModel: [],
        categoriesIds: []
    }),
    getters: {},
    actions: {
        addCategoryId(categoryId) {
            const idx = this.categoriesIds.indexOf(categoryId)

            if (idx === -1) {
                this.categoriesIds.push(categoryId)
            }
        },
        updateAmountTotal() {
            const categories = AccountCategory.findIn(this.categoriesIds)
            this.amountTotal = categories.reduce((acc, category) => {

                return acc + category.getSumInMineCurrency()
            }, 0)
        },
    },
})
