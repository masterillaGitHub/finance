<script setup>

import TheAccountStep from "@/views/account/transactions/components/transaction-steps/TheAccountStep.vue";
import {onMounted} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {STEP_TO_ACCOUNT} from "@/services/transaction/step_transition_service.js";

const createStore = useCreateStore()

onMounted(async () => {
  await AccountCategory.loadTransactionPage()
})
</script>

<template>

  <TheAccountStep
      v-model="createStore.accountId"
      :account="createStore.getAccount"
      :is-valid="createStore.isAccountValid"
  />
  <TheAccountStep
      v-if="createStore.typeId === TYPE_ID_TRANSFER"
      v-model="createStore.toAccountId"
      :account="createStore.getToAccount"
      :is-valid="createStore.isToAccountValid"
      :is-transfer="true"
      :step-name="STEP_TO_ACCOUNT"
  />
</template>

<style scoped>

</style>
