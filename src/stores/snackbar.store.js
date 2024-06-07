import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

export const useSnackbarStore = defineStore('snackbar', {
    state: () => ({
        showing: false,
        text: null,
    }),
    getters: {
        isShowing: state => state.showing,
    },
    actions: {
        show(text) {
            this.text = text
            this.showing = true
        },
        hide() {
            this.showing = false
        }
    },
})
