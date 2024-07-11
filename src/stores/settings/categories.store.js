import {defineStore} from "pinia";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {TYPE_ID_EXPENSE} from "@/helpers/constants.js";

export const useSettingsCategories = defineStore('settings/categories', {
    state: () => ({
        categoryLoading: false,
        editCategory: null,
        editDialog: false,
        storeDialog: false,
        currentTab: TYPE_ID_EXPENSE,
        categoryIds: [],
    }),
    getters: {
        categories: state => TransactionCategory.findIn(state.categoryIds)
    },
    actions: {
        async loadCategories() {
            console.log('load categories')
            this.categoryLoading = true

            try {
                this.categoryIds = await TransactionCategory.sync({
                    include: 'children.parent,parent',
                    'filter[user_id]': 'auth'
                })
            }
            finally {
                this.categoryLoading = false
            }
        },
        async saveCategory(category) {
            await category.save()
        },
        setNewCategory(){
            const category = new TransactionCategory()
            category.type = this.currentTab

            this.editCategory = category
            this.storeDialog = true
        },
        setEditCategory(category) {
            this.editCategory = category
            this.editDialog = true
        },
        closeDialog() {
            this.editDialog = false
            this.storeDialog = false

            setTimeout(() => {
                this.editCategory = false
            },1000)
        },
    }
})
