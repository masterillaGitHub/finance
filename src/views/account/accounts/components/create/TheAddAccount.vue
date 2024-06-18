<script setup>

import {computed, ref} from "vue";
import TheCreateAccount from "@/views/account/accounts/components/create/TheCreateAccount.vue";
import DialogComponent from "@/components/DialogComponent.vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {isEmptyArray} from "@/helpers/validators/index.js";
import {useCreateStore} from "@/stores/accounts/create.store.js";
import {MODEL_UPDATE_FIELD} from "@/helpers/constants.js";

const createStore = useCreateStore()
const dialog = ref(false)
const categoryLoading = ref(false)
const sheet = ref(false)
const categoriesIds = ref([])
const categories = computed(() => AccountCategory.findIn(categoriesIds.value))

async function categorySync() {
  categoryLoading.value = true

  try {
    const response = await AccountCategory.query()
        .setUpdateMode(MODEL_UPDATE_FIELD)
        .get()
    categoriesIds.value = response.data.data
  }
  finally {
    categoryLoading.value = false
  }
}

const openPanel = async () => {
  if (isEmptyArray(categories.value)) {
    await categorySync()
  }

  sheet.value = true
}

function openDialog(categoryId) {
  createStore.createAccount(categoryId)
  dialog.value = true
}
function accountSave() {
  sheet.value = false
  dialog.value = false
}
</script>

<template>
  <div class="text-center">
    <v-btn
        variant="outlined"
        :loading="categoryLoading"
        @click="openPanel"
    >
      <v-icon icon="mdi-wallet-plus-outline"/>
    </v-btn>
  </div>

  <v-bottom-sheet v-model="sheet">
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
                @click="openDialog(category.id)"
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

  <DialogComponent
    v-model="dialog"
  >
    <TheCreateAccount
        @accountSave="accountSave"
        @dialogClose="dialog = false"
    />
  </DialogComponent>
</template>

<style scoped>
</style>
