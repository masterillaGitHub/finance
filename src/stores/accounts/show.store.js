import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

export const useShowStore = defineStore('accounts/show', {
    state: () => ({
        editDialog: false,
    }),
    getters: {},
    actions: {},
})
