<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import Calculator from "@/components/Calculator.vue";
import {computed, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";

const createStore = useCreateStore()
const sum = ref(0)
const calc = ref(null)
const calcValue = computed(() => calc.value?.calcValue ?? null)
const isCalcShow = ref(true)

const done = amount => {
  createStore.amount = amount
}
</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheCreateAmount
      :amount="calcValue ?? createStore.amount"
      @on-click-on-amount="isCalcShow = true"
    />

    <BottomCalculator
        v-model="isCalcShow"
        @done="done($event)"
    />
    <TheTransactionSteps/>

  </div>
</template>

<style scoped>
</style>
