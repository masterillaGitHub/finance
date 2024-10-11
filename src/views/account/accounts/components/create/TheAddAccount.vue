<script setup>

import {ref} from "vue";
import TheCreateAccount from "@/views/account/accounts/components/create/TheCreateAccount.vue";
import DialogComponent from "@/components/DialogComponent.vue";
import {useCreateStore} from "@/stores/accounts/create.store.js";
import {useAddStore} from "@/stores/accounts/add.store.js";
import TheAccountCategoryList from "@/views/account/accounts/components/create/TheAccountCategoryList.vue";
import TheChoiceBankType from "@/views/account/accounts/components/create/TheChoiceBankType.vue";
import {ACCOUNT_CATEGORY_ID_BANK_ACCOUNT, BANK_TYPE_INPUT_ID_MANUAL} from "@/helpers/constants.js";

const createStore = useCreateStore()
const addStore = useAddStore()
const createPageDialog = ref(false)

const openPanel = async () => {
  await addStore.categorySync()
  addStore.isShowAccountList = true
}

function openDialog(categoryId) {
  createStore.resetAccountSum()
  createStore.createAccount(categoryId)
  createPageDialog.value = true
}

function selectCategoryId(categoryId) {
  if (categoryId === ACCOUNT_CATEGORY_ID_BANK_ACCOUNT) {
    addStore.isShowChoiceBankType = true
  }
  else {
    openDialog(categoryId)
  }
}

function selectBankType(bankTypeId) {
  if (bankTypeId === BANK_TYPE_INPUT_ID_MANUAL) {
    openDialog(ACCOUNT_CATEGORY_ID_BANK_ACCOUNT)
  }
  else {

  }
}

function accountSave() {
  addStore.isShowAccountList = false
  createPageDialog.value = false
}
</script>

<template>
  <div class="text-center">
    <v-btn
        variant="outlined"
        :loading="addStore.categoryLoading"
        @click="openPanel"
    >
      <v-icon icon="mdi-wallet-plus-outline"/>
    </v-btn>
  </div>

  <TheAccountCategoryList
      @selected-category-id="selectCategoryId"
  />

  <TheChoiceBankType
    @selected-bank-type-id="selectBankType"
  />

  <DialogComponent
    v-model="createPageDialog"
  >
    <TheCreateAccount
        @accountSave="accountSave"
        @dialogClose="createPageDialog = false"
    />
  </DialogComponent>
</template>

<style scoped>
</style>
