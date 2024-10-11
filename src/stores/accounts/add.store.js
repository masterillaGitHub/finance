import {defineStore} from 'pinia'
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {MODEL_UPDATE_FIELD} from "@/helpers/constants.js";
import {isNotEmptyArray} from "@/helpers/validators/index.js";

export const useAddStore = defineStore('accounts/add', {
    state: () => ({
        categoryLoading: false,
        categoriesIds: [],
        isShowAccountList: false,
        isShowChoiceBankType: false,
    }),
    getters: {
        getCategories: state => AccountCategory.findIn(state.categoriesIds)
    },
    actions: {
        async categorySync() {
            if (isNotEmptyArray(this.getCategories)) {
                return
            }

            this.categoryLoading = true

            try {
                const response = await AccountCategory.query()
                    .setUpdateMode(MODEL_UPDATE_FIELD)
                    .get()

                this.categoriesIds = response.data.data
            }
            finally {
                this.categoryLoading = false
            }
        }
    },
})
