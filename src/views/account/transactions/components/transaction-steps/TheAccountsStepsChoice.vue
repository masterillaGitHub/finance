<script setup>

import TheAccountStep from "@/views/account/transactions/components/transaction-steps/TheAccountStep.vue";
import {onMounted} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useFormStore} from "@/stores/transactions/form.store.js";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {STEP_TO_ACCOUNT} from "@/services/transaction/step_transition_service.js";

const formStore = useFormStore()

onMounted(async () => {
  await AccountCategory.loadTransactionPage()
})
</script>

<template>

  <TheAccountStep
      v-model="formStore.accountId"
      :account="formStore.getAccount"
      :is-valid="formStore.isAccountValid"
  />
  <TheAccountStep
      v-if="formStore.typeId === TYPE_ID_TRANSFER"
      v-model="formStore.toAccountId"
      :account="formStore.getToAccount"
      :is-valid="formStore.isToAccountValid"
      :is-transfer="true"
      :step-name="STEP_TO_ACCOUNT"
  />
</template>

<style scoped>

</style>
