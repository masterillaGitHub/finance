<script setup>

import TheTypeStep from "@/views/account/transactions/components/transaction-steps/TheTypeStep.vue";
import TheAccountStep from "@/views/account/transactions/components/transaction-steps/TheAccountStep.vue";
import TheCategoryStep from "@/views/account/transactions/components/transaction-steps/TheCategoryStep.vue";
import TheTagStep from "@/views/account/transactions/components/transaction-steps/TheTagStep.vue";
import TheDateStep from "@/views/account/transactions/components/transaction-steps/TheDateStep.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const createStore = useCreateStore()

</script>

<template>
  <div>
    <v-expansion-panels
        v-model="createStore.openStep"
        variant="accordion"
        elevation="0"
    >
      <TheTypeStep/>
      <TheAccountStep/>
      <TheCategoryStep/>
      <TheTagStep/>
      <TheDateStep/>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>
