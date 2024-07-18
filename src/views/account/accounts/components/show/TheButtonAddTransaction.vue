<script setup>

import {useRoute, useRouter} from "vue-router";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import {STEP_CATEGORY} from "@/services/transaction/step_transition_service.js";

const router = useRouter()
const route = useRoute()
const transactionForm = useCreateStore()

const click = () => {
  transactionForm.accountId = parseInt(route.params.id, 10)
  transactionForm.openStep = STEP_CATEGORY
  router.push({name: 'transactions.create'})
}
</script>

<template>
  <v-fab
      icon="mdi-plus"
      app
      size="x-large"
      @click="click"
  />
</template>

<style scoped>

</style>
