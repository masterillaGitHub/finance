import {defineStore} from 'pinia'
import {isEmpty} from "@/helpers/validators/index.js";

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'light',
        offsetTop: 0, // Поточне положення прокрутки по вертикалі
        windowHeight: 0, // Висота видимого вікна
        documentHeight: 0, // Висота всього документа,
        currency: {
            main: 'uah',
            exchangeRates: {
                usd: 40.8823,
                eur: 44.3818,
            }
        },
    }),
    getters: {
        windowsHeightTop: state => state.documentHeight - state.windowHeight,
        offsetBottom(state) {
            return this.windowsHeightTop - state.offsetTop
        },
        offsetTopPercent(state) {
            let res = state.offsetTop / this.windowsHeightTop * 100

            if (isEmpty(res)) {
                return 0
            }

            return parseFloat((res).toFixed(2))
        },
    },
    actions: {
        themeToggle() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        },
        updateScrollHeight() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0

            this.documentHeight = document.documentElement.scrollHeight
            this.windowHeight = window.innerHeight
            this.offsetTop = parseInt(scrollTop.toFixed(0), 10)
        },
    },
})
