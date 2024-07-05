<script setup>

import TransactionGroup from "@/views/account/transactions/components/index/TransactionGroup.vue";
import TheBottomLazyLoading from "@/views/account/transactions/components/index/TheBottomLazyLoading.vue";
import {isUndefined} from "@/helpers/validators/index.js";
import {computed, onMounted, onUnmounted, ref} from "vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {useIndexStore} from "@/stores/transactions/index.store.js";

const indexStore = useIndexStore()

const transactions = computed(() => toGroupTransactions(Transaction.findLoaded()))
const transactionCount = computed(() => transactions.value.length)
const transactionsLoading = ref(true)

onMounted(initComponent)
onUnmounted(() => {
  indexStore.reset()
  Transaction.reset()
})

async function initComponent() {
  indexStore.reset()

  try {
    await indexStore.firstLoadTransactions()
  }
  finally {
    transactionsLoading.value = false
  }
}

function toGroupTransactions(transactions) {
  return Object.values(transactions.reduce(createGroup, {}))
  // TODO: Check, if need sort then uncomment. Because sort on server
  // .sort( ( a, b ) => b.timestamp - a.timestamp )
}

function createGroup(acc, transaction) {

  const field = transaction.transaction_at_date;

  if (isUndefined(acc[field])) {
    acc[field] = {
      date: transaction.transaction_at_date,
      timestamp: transaction.transaction_at_timestamp,
      transactions: []
    }
  }

  acc[field].transactions.push(transaction)

  return acc
}
</script>

<template>

  <v-fade-transition mode="out-in">
    <v-progress-linear v-if="transactionsLoading && !transactions.length" indeterminate />
    <v-card v-else>
      <template v-if="!transactionsLoading && !transactions.length">
        <v-card-text>
          Покищо транзакцій немає
        </v-card-text>
        <v-card-actions>
          <v-btn
              prepend-icon="mdi-plus"
              text="Додати транзакцію"
              :to="{name: 'transactions.create'}"
          />
        </v-card-actions>
      </template>

      <v-card-text v-else>
        <TransactionGroup
            v-for="transactionGroup in transactions" :key="transactionGroup.timestamp"
            :group="transactionGroup"
        />
        <TheBottomLazyLoading/>
      </v-card-text>

    </v-card>
  </v-fade-transition>
</template>

<style scoped>

</style>
