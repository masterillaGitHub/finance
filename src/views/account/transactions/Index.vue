<script setup>

import TransactionGroup from "@/views/account/transactions/components/index/TransactionGroup.vue";
import {computed, onMounted} from "vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {isUndefined} from "@/helpers/validators/index.js";
import {useIndexStore} from "@/stores/transactions/index.store.js";
import TheBottomLoading from "@/views/account/transactions/components/index/TheBottomLoading.vue";

const indexStore = useIndexStore()
const transactionsGroups = computed(() => toGroupTransactions(Transaction.findLoaded()))

onMounted(initComponent)

function initComponent() {
  indexStore.loadTransactions()
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
<div
>
  <v-card
    :loading="indexStore.transactionsLoading"
  >
    <v-card-text
    >
      <TransactionGroup
          v-for="group in transactionsGroups" :key="group.timestamp"
          :group="group"
      />
      <TheBottomLoading/>
      <v-fab
          app
          icon="mdi-plus"
          class="mb-14"
          :to="{name: 'transactions.create'}"
      />
    </v-card-text>
  </v-card>
</div>
</template>

<style scoped>

</style>
