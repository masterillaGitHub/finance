<script setup>

import TheAppBar from "@/views/account/transactions/components/edit/TheAppBar.vue";
import {computed, onMounted, ref} from "vue";
import TheCreateAmount from "@/views/account/transactions/components/create/TheCreateAmount.vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TheTransactionSteps from "@/views/account/transactions/components/transaction-steps/TheTransactionSteps.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";
import TheSaveButton from "@/views/account/transactions/components/TheSaveButton.vue";
import Transaction from "@/models_resources/models/Transaction.js";
import TheAmount from "@/views/account/transactions/components/TheAmount.vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import {MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";
import {STEP_CLOSED} from "@/services/transaction/step_transition_service.js";

const props = defineProps({
  id: {
    type: [Number,String],
    required: true,
  }
})
const currencyStore = useCurrenciesStore()
const form = useFormStore()
const isCalcShow = ref(false)
const transactionId = ref()
const transactionLoading = ref(false)

const transaction = computed(() => Transaction.find(transactionId.value))

// TODO: Редагування транзакції. Потрібно переробити зберігання даних із створення на універсальне form.state
onMounted(initComponent)

async function initComponent() {
  await loadTransaction()

  form.reset()

  // formFill()
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
  console.log('transaction', transaction.value)
  form.$patch({
    openStep: STEP_CLOSED,
    amount: transaction.value.amount,
    currencyId: transaction.value.currency.id,
    typeId: transaction.value.type.id,
    accountId: transaction.value.account.id,
    categoryId: transaction.value.category.id,
    tagIds: [],
    date: new Date(transaction.value.transaction_at),
    toAccountId: transaction.value.to_account?.id ?? null,
    toCurrencyId: transaction.value.to_currency?.id ?? null,
    toAmount: transaction.value.to_amount,
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
<!--  <div class="fill-height d-flex flex-column">-->
<!--    <div class="flex-grow-1"></div>-->
<!--    <TheAmount-->
<!--      :amount="form.amount"-->
<!--      @on-click-on-amount="isCalcShow = true"-->
<!--    />-->

<!--    <BottomCalculator-->
<!--        v-model="isCalcShow"-->
<!--        :start-sum="form.amount"-->
<!--        @done="form.amount = $event"-->
<!--    />-->
<!--    <TheTransactionSteps/>-->
<!--    <TheSaveButton/>-->

<!--  </div>-->
</template>

<style scoped>
</style>
