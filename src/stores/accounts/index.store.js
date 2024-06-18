import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

export const useIndexStore = defineStore('accounts/index', {
    state: () => ({
        accountsPanelModel: [],
        categoriesIds: []
    }),
    getters: {},
    actions: {},
})
