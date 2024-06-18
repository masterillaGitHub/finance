<script setup>
import CurrencyChoiceItem from "@/views/account/accounts/components/AccountSumItem.vue";
import Currency from "@/models_resources/models/Currency.js";
import {computed, onMounted, ref} from "vue";
import TheAddAccountSum from "@/views/account/accounts/components/TheAddAccountSum.vue";
import {isAccountSumValid, validateAccountSumItems} from "@/helpers/validators/entities.js";
import AccountSum from "@/models_resources/models/AccountSum.js";


const props = defineProps({
  accountSums: {
    type: Array,
    required: true,
    validator: validateAccountSumItems
  },
  isCreateFirst: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits({
  createdAccountSum: isAccountSumValid,
  removeAccountSum: isAccountSumValid
})
const currencyLoading = ref(false)
const currencies = computed(() => Currency.findLoaded())
const isAvailableRemove = computed(() => props.accountSums.length > 1)

onMounted(() => {
  initComponent()
})

async function initComponent() {
  if (currencies.value.length === 0) {
    await loadCurrencies()
  }

  if (props.isCreateFirst) {
    createFirstAccountSum()
  }

}

function createFirstAccountSum() {
  const currencies = Currency.all()

  createAccountSum(currencies[0])
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

function createAccountSum(currency) {
  const accountSum = new AccountSum()
  accountSum.balance = 0
  accountSum.currency = currency.id

  emit('createdAccountSum', accountSum)
}

</script>

<template>

  <v-progress-linear v-if="currencyLoading" indeterminate />
  <CurrencyChoiceItem
      v-for="sum in accountSums"
      :key="sum.id"

      :account-sum="sum"
      :is-available-remove="isAvailableRemove"
      @remove-account-sum="emit('removeAccountSum', $event)"
  />
  <TheAddAccountSum
    @selected-currency="createAccountSum"
  />

</template>

<style scoped>

</style>
