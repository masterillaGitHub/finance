<script setup>

import TheTypeStep from "@/views/account/transactions/components/transaction-steps/TheTypeStep.vue";
import TheCategoryStep from "@/views/account/transactions/components/transaction-steps/TheCategoryStep.vue";
import TheTagStep from "@/views/account/transactions/components/transaction-steps/TheTagStep.vue";
import TheDateStep from "@/views/account/transactions/components/transaction-steps/TheDateStep.vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheAccountsStepsChoice
  from "@/views/account/transactions/components/transaction-steps/TheAccountsStepsChoice.vue";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import TheToAmount from "@/views/account/transactions/components/transaction-steps/TheToAmount.vue";
import TheDescriptionStep from "@/views/account/transactions/components/transaction-steps/TheDescriptionStep.vue";
import TheNoteStep from "@/views/account/transactions/components/transaction-steps/TheNoteStep.vue";

const formStore = useFormStore()

</script>

<template>
  <div>
    <v-expansion-panels
        v-model="formStore.openStep"
        variant="accordion"
        elevation="0"
    >
      <TheDescriptionStep/>
      <TheTypeStep/>
      <TheAccountsStepsChoice/>
      <TheCategoryStep v-if="formStore.typeId !== TYPE_ID_TRANSFER"/>
      <TheToAmount v-if="formStore.typeId === TYPE_ID_TRANSFER"/>
      <TheTagStep/>
      <TheDateStep/>
      <TheNoteStep/>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>
