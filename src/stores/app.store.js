import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'light',
    }),
    getters: {},
    actions: {
        themeToggle() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        }
    },
})
