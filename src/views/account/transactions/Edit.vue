<script setup>

import TheAppBar from "@/views/account/transactions/components/edit/TheAppBar.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import Transaction from "@/models_resources/models/Transaction.js";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import {MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";
import {STEP_CLOSED} from "@/services/transaction/step_transition_service.js";
import {convertMinusToPlus} from "@/helpers/functions.js";

const props = defineProps({
  id: {
    type: [Number,String],
    required: true,
  }
})
const currencyStore = useCurrenciesStore()
const formStore = useFormStore()
const isCalcShow = ref(false)
const transactionId = ref()
const transactionLoading = ref(false)

const transaction = computed(() => Transaction.find(transactionId.value))

onMounted(initComponent)

onUnmounted(() => {
  formStore.reset()
})

async function initComponent() {
  await loadTransaction()

  formFill()
}

async function loadTransaction() {
  transactionLoading.value = true

  try {
    const response = await Transaction.query()
        .setUpdateMode(MODEL_UPDATE_ENTITY)
        .setParams({
          include: 'currency,type,account,category,to_account,to_currency',
          'filter[id]': props.id,
        })
        .get()

    console.log('response', response)

    transactionId.value = response.data.data[0]
  }
  finally {
    transactionLoading.value = false
  }
}

async function loadCurrencies() {

}

function formFill() {
  const categoryId =

  formStore.$patch({
    openStep: STEP_CLOSED,
    amount: convertMinusToPlus(transaction.value.amount),
    currencyId: transaction.value.getRelation('currency'),
    typeId: transaction.value.getRelation('type'),
    accountId: transaction.value.getRelation('account'),
    categoryId: transaction.value.getRelation('category'),
    tagIds: [],
    date: new Date(transaction.value.transaction_at_timestamp * 1000),
    toAccountId: transaction.value.getRelation('to_account'),
    toCurrencyId: transaction.value.getRelation('to_currency'),
    toAmount: convertMinusToPlus(transaction.value.to_amount),

    transactionId: transaction.value.id,
  })
}

const removeTransaction = () => {
  transaction.value.destroy()
}
</script>

<template>
  <TheAppBar
    @remove-transaction="removeTransaction"
  />
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1"></div>
    <TheAmount
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
