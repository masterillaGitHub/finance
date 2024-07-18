<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import {onUnmounted, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";

const createStore = useCreateStore()
const isCalcShow = ref(true)

onUnmounted(() => {
  createStore.reset()
})

</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheCreateAmount
      :amount="createStore.amount"
      @on-click-on-amount="isCalcShow = true"
    />

    <BottomCalculator
        v-model="isCalcShow"
        :start-sum="createStore.amount"
        @done="createStore.amount = $event"
    />
    <TheTransactionSteps/>
    <TheSaveButton/>

  </div>
</template>

<style scoped>
</style>
