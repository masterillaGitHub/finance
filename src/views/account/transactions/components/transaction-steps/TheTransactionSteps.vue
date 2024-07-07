<script setup>

import TheTypeStep from "@/views/account/transactions/components/transaction-steps/TheTypeStep.vue";
import TheCategoryStep from "@/views/account/transactions/components/transaction-steps/TheCategoryStep.vue";
import TheTagStep from "@/views/account/transactions/components/transaction-steps/TheTagStep.vue";
import TheDateStep from "@/views/account/transactions/components/transaction-steps/TheDateStep.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import TheAccountsStepsChoice
  from "@/views/account/transactions/components/transaction-steps/TheAccountsStepsChoice.vue";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import TheToAmount from "@/views/account/transactions/components/transaction-steps/TheToAmount.vue";

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
      <TheAccountsStepsChoice/>
      <TheCategoryStep v-if="createStore.typeId !== TYPE_ID_TRANSFER"/>
      <TheToAmount v-if="createStore.typeId === TYPE_ID_TRANSFER"/>
      <TheTagStep/>
      <TheDateStep/>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>
