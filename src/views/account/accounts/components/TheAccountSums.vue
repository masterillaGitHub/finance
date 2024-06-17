<script setup>
import CurrencyChoiceItem from "@/views/account/accounts/components/AccountSumItem.vue";
import Currency from "@/models_resources/models/Currency.js";
import {computed, onMounted, onUnmounted, ref} from "vue";
import TheAddAccountSum from "@/views/account/accounts/components/TheAddAccountSum.vue";
import {sums, createAccountSum, reset} from '@/services/accounts/create.js'


const currencyLoading = ref(false)
const currencies = computed(() => Currency.findLoaded())

onMounted(() => {
  reset()
  initComponent()
})

async function initComponent() {
  if (currencies.value.length === 0) {
    await loadCurrencies()
  }

  createAccountSum(1)
}

async function loadCurrencies() {

  currencyLoading.value = true

  try {
    await Currency.sync()
  }
  finally {
    currencyLoading.value = false
  }
}

</script>

<template>

  <v-progress-linear v-if="currencyLoading" indeterminate />
  <CurrencyChoiceItem
      v-for="sum in sums"
      :key="sum.id"

      :account-sum="sum"
  />
  <TheAddAccountSum />

</template>

<style scoped>

</style>
