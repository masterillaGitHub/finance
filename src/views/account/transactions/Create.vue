<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import {onUnmounted} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";
import {TYPE_ID_EXPENSE} from "@/helpers/constants.js";
import {useAppStore} from "@/stores/app.store.js";
import {STEP_ACCOUNT} from "@/services/transaction/step_transition_service.js";

const formStore = useFormStore()
const appStore = useAppStore()

onUnmounted(() => {
  formStore.reset()
})

function initComponent() {
  formFill()
}

function formFill() {
  formStore.$patch({
    openStep: formStore.openStep ?? STEP_ACCOUNT,
    date: new Date(),
    typeId: TYPE_ID_EXPENSE,
    currencyId: appStore.getMainCurrency.id
  })
}

initComponent()
</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheAmount :is-calc-show="true"/>
    <TheTransactionSteps/>
    <TheSaveButton/>

  </div>
</template>

<style scoped>
</style>
