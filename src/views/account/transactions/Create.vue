<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import {onMounted, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";

const createStore = useCreateStore()
const isCalcShow = ref(true)

onMounted(() => {
  createStore.reset()
})

</script>

<template>
  <TheAppBar/>
  <div class="fill-height d-flex flex-column">
    <ul>
      <li>Зберегти git commit</li>
      <li>Налаштувати валідацію даних в формі перед зберіганням</li>
      <li>Заголовки На рахунок - З категорії, З рахунку - На категорію, З рахунку - На рахунок</li>
      <li>Налаштувати App bar, широкий щоб зменшувався коли прокручуєш вниз</li>
    </ul>
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

  </div>
</template>

<style scoped>
</style>
