<script setup>

import {useRoute, useRouter} from "vue-router";
import {useFormStore} from "@/stores/transactions/form.store.js";
import {STEP_CATEGORY} from "@/services/transaction/step_transition_service.js";

const router = useRouter()
const route = useRoute()
const formStore = useFormStore()

const click = () => {
  formStore.accountId = parseInt(route.params.id, 10)
  formStore.openStep = STEP_CATEGORY
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
