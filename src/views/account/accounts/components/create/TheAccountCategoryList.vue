<script setup>

import {computed, ref} from "vue";
import {useAddStore} from "@/stores/accounts/add.store.js";

const emit = defineEmits({
    selectedCategoryId: Number
})
const addStore = useAddStore()
const categoriesIds = ref([])
const categories = computed(() => addStore.getCategories)

</script>

<template>
    <v-bottom-sheet v-model="addStore.isShowAccountList">
        <v-card>
            <v-container>
                <v-row>
                    <v-col
                        v-for="category in categories"
                        cols="6"
                    >
                        <v-sheet
                            v-ripple
                            border
                            rounded="lg"
                            height="100"
                            class="w-100 bg-grey-lighten-3"
                            @click="emit('selectedCategoryId', category.id)"
                        >
                            <div
                                class="d-flex flex-column align-center justify-center fill-height"
                            >
                                <v-icon class="mb-1" :icon="category.icon"/>
                                <div class="text-center">{{category.name}}</div>
                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-bottom-sheet>
</template>

<style scoped>

</style>