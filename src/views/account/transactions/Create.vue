<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import {onUnmounted, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";

const formStore = useFormStore()
const isCalcShow = ref(true)

onUnmounted(() => {
  formStore.reset()
})

</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheCreateAmount
      :amount="formStore.amount"
      @on-click-on-amount="isCalcShow = true"
    />

    <BottomCalculator
        v-model="isCalcShow"
        :start-sum="formStore.amount"
        @done="formStore.amount = $event"
    />
    <TheTransactionSteps/>
    <TheSaveButton/>

  </div>
</template>

<style scoped>
</style>
