<script setup>

import TheAppBar from "@/views/account/transactions/components/edit/TheAppBar.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {TYPE_ID_EXPENSE, TYPE_ID_INCOME, TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const props = defineProps({
  id: {
    type: [Number,String],
    required: true,
  }
})
const {toMinus, toPlus} = useCurrencyDecimalConvert()
const formStore = useFormStore()
const createStore = useCreateStore()
const transactionId = ref()
const transactionLoading = ref(true)

const transaction = computed(() => Transaction.find(transactionId.value))

onMounted(initComponent)

onUnmounted(() => {
  formStore.reset()
})

async function initComponent() {
  transactionLoading.value = true

  try {
    transactionId.value = await createStore.loadTransactionById(props.id)
    formFill()
  }
  finally {
    transactionLoading.value = false
  }

}

function formFill() {
  formStore.$patch({
    amount: handleAmount(transaction.value.amount),
    currencyId: transaction.value.getRelation('currency'),
    typeId: transaction.value.getRelation('type'),
    accountId: transaction.value.getRelation('account'),
    categoryId: transaction.value.getRelation('category'),
    description: transaction.value.description,
    tagIds: transaction.value.getRelation('tags'),
    date: new Date(transaction.value.transaction_at_timestamp * 1000),
    note: transaction.value.note,
    toAccountId: transaction.value.transfer_transaction?.getRelation('account'),
    toCurrencyId: transaction.value.transfer_transaction?.getRelation('currency'),
    toAmount: transaction.value.transfer_transaction?.amount,

    transactionId: transaction.value.id,
    transferTransactionId: transaction.value.transfer_transaction?.id
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
  <v-fade-transition mode="out-in">
    <v-progress-linear v-if="transactionLoading" indeterminate />

    <div v-else class="fill-height d-flex flex-column">
      <div class="flex-grow-1"></div>
      <TheAmount/>
      <TheTransactionSteps/>
      <TheSaveButton/>
    </div>

  </v-fade-transition>
</template>

<style scoped>
</style>
