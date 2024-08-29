<script setup>

import TheAppBar from "@/views/account/transactions/components/edit/TheAppBar.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {MODEL_UPDATE_ENTITY, TYPE_ID_EXPENSE, TYPE_ID_INCOME, TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {STEP_CLOSED} from "@/services/transaction/step_transition_service.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";

const props = defineProps({
  id: {
    type: [Number,String],
    required: true,
  }
})
const {toMinus, toPlus} = useCurrencyDecimalConvert()
const formStore = useFormStore()
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
    amount: handleAmount(transaction.value.amount),
    currencyId: transaction.value.getRelation('currency'),
    typeId: transaction.value.getRelation('type'),
    accountId: transaction.value.getRelation('account'),
    categoryId: transaction.value.getRelation('category'),
    tagIds: [],
    date: new Date(transaction.value.transaction_at_timestamp * 1000),
    toAccountId: transaction.value.getRelation('to_account'),
    toCurrencyId: transaction.value.getRelation('to_currency'),
    toAmount: transaction.value.to_amount,

    transactionId: transaction.value.id,
  })
}

const handleAmount = val => {
  switch (transaction.value.getRelation('type')) {
    case TYPE_ID_EXPENSE:
    case TYPE_ID_TRANSFER:
      return toMinus(val)
    case TYPE_ID_INCOME:
      return toPlus(val)
  }
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
    <TheAmount/>
    <TheTransactionSteps/>
    <TheSaveButton/>

  </div>
</template>

<style scoped>
</style>
