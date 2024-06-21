<script setup>

import TheTypeStep from "@/views/account/transactions/components/transaction-steps/TheTypeStep.vue";
import TheAccountStep from "@/views/account/transactions/components/transaction-steps/TheAccountStep.vue";
import TheCategoryStep from "@/views/account/transactions/components/transaction-steps/TheCategoryStep.vue";
import TheTagStep from "@/views/account/transactions/components/transaction-steps/TheTagStep.vue";
import {ref} from "vue";
import TheDateStep from "@/views/account/transactions/components/transaction-steps/TheDateStep.vue";

const panelsModel = ref(1)

function openPanel(idx) {
  panelsModel.value = idx
}
</script>

<template>
  <div>

    <v-expansion-panels
        v-model="panelsModel"
        variant="accordion"
        elevation="0"
    >
      <TheTypeStep @done="openPanel(1)"/>
      <TheAccountStep @done="openPanel(2)"/>
      <TheCategoryStep @done="openPanel(3)"/>
      <TheTagStep/>
      <TheDateStep @done="openPanel(null)"/>
    </v-expansion-panels>

    <v-btn
        color="orange-darken-1"
        rounded="t-0 b-xl"
        size="x-large"
        text="Continue"
        variant="flat"
        block
    ></v-btn>
  </div>
</template>

<style scoped>

</style>
