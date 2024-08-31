<script setup>

import TheAppBar from "@/views/account/transactions/components/TheAppBar.vue";
import {onMounted, onUnmounted} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";

const formStore = useFormStore()

onMounted(initComponent)
onUnmounted(() => {
  formStore.reset()
})

function initComponent() {
  formFill()
}

function formFill() {
  formStore.$patch({
    date: new Date(),
  })
}

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
