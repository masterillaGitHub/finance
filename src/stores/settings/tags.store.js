import {defineStore} from "pinia";
import TransactionTag from "@/models_resources/models/TransactionTag.js";
import TagResource from "@/models_resources/resources/TransactionTagResource.js";

export const useSettingsTagsStore = defineStore('settings/tags', {
    state: () => ({
        tagsLoading: true,
        editTag: null,
        editDialog: false,
        storeDialog: false,
        tagIds: [],
    }),
    getters: {
        tags: state => TransactionTag.findIn(state.tagIds)
    },
    actions: {
        async loadTags() {
            console.log('load tags')
            this.tagsLoading = true

            try {
                this.tagIds = await TransactionTag.sync({
                    'filter[user_id]': 'auth'
                })
            }
            finally {
                this.tagsLoading = false
            }
        },
        async saveTag(tag) {
            await tag.save()
        },
        setNewTag(){
            this.editTag = new TransactionTag()
            this.storeDialog = true
        },
        setEditTag(tag) {
            this.editTag = tag
            this.editDialog = true
        },
        closeDialog() {
            this.editDialog = false
            this.storeDialog = false

            setTimeout(() => {
                this.editTag = false
            },1000)
        },
        async setSorting(tags) {
            const ids = tags.map(c => c.id)
            this.tagIds = ids
            await TagResource.setSorting(ids)
        }
    }
})
