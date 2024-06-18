<script setup>
import CurrencyChoiceItem from "@/views/account/accounts/components/AccountSumItem.vue";
import Currency from "@/models_resources/models/Currency.js";
import {computed, onMounted, onUnmounted, ref} from "vue";
import TheAddAccountSum from "@/views/account/accounts/components/TheAddAccountSum.vue";
import {useCreateStore} from "@/stores/accounts/create.store.js";


const createStore = useCreateStore()
const currencyLoading = ref(false)
const sums = computed(() => createStore.sums)
const currencies = computed(() => Currency.findLoaded())

onMounted(() => {
  createStore.resetAccountSum()
  initComponent()
})

async function initComponent() {
  if (currencies.value.length === 0) {
    await loadCurrencies()
  }

  createStore.createAccountSum(1)
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
