import { defineStore } from 'pinia'
import AuthResource from "@/models_resources/resources/AuthResource.js";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false,
        initial: false,
    }),
    getters: {
        getUser: state => state.user,
        isAuth: state => !!state.user,
        isNotAuth: state => !state.user,
        isLoading: state => state.loading,
        isInitial: state => state.initial,
    },
    actions: {
        async register(name, email, password) {
            const resource = new AuthResource()

            await resource.getCsrfCookie()
            const loginRequest = await resource.register(name, email, password)

            if (loginRequest.status !== 200 && loginRequest.status !== 204) {
                this.resetUser()
                return false
            }

            await this.loadUser()
            return true
        },
        async login(email, password) {
            const resource = new AuthResource()

            await resource.getCsrfCookie()
            const loginRequest = await resource.login(email, password)

            if (loginRequest.status !== 200 && loginRequest.status !== 204) {
                this.resetUser()
                return false
            }

            await this.loadUser()

            return true
        },
        async logout() {
            const resource = new AuthResource()

            try {
                await resource.logout()

                this.resetUser()
            }
            catch (e) {
                throw new Error(e)
            }

        },
        async loadUser() {
            const resource = new AuthResource()
            this.loading = true

            try {
                const response = await resource.getAuth()

                if (response.status === 200) {
                    this.user = response.data
                }
                else {
                    this.resetUser()
                }
            }
            finally {
                this.loading = false
            }
        },
        resetUser() {
            this.user = null
        }
    },
})
