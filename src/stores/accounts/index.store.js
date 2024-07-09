import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

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
        }
    },
})
