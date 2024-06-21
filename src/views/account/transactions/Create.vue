<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import Calculator from "@/components/Calculator.vue";
import {computed, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";

const createStore = useCreateStore()
const sum = ref(0)
const calc = ref(null)
const calcValue = computed(() => calc.value?.calcValue ?? null)
const isSecondStep = ref(false)

const done = amount => {
  createStore.amount = amount

  isSecondStep.value = true
}
</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheCreateAmount
      :amount="calcValue ?? createStore.amount"
      @on-click-on-amount="isSecondStep = false"
    />

    <v-fade-transition mode="out-in">
      <KeepAlive>
        <Calculator
            v-if="!isSecondStep"
            ref="calc"
            :value="createStore.amount"
            :displayShow="false"
            @on-result="done($event)"
        />
        <TheTransactionSteps v-else/>
      </KeepAlive>
    </v-fade-transition>

  </div>
</template>

<style scoped>
</style>
