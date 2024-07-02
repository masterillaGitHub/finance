<script setup>

import TheAccountStep from "@/views/account/transactions/components/transaction-steps/TheAccountStep.vue";
import {onMounted} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const createStore = useCreateStore()

onMounted(async () => {
  await AccountCategory.sync({
    include: 'accounts'
  })
})
</script>

<template>

  <TheAccountStep
      v-model="createStore.accountId"
      :account="createStore.getAccount"
      :is-valid="createStore.isAccountValid"
  />
  <TheAccountStep
      v-if="createStore.typeId === 3"
      v-model="createStore.accountTransferId"
      :account="createStore.getAccountTransfer"
      :is-valid="createStore.isAccountTransferValid"
      :is-transfer="true"
  />
</template>

<style scoped>

</style>
