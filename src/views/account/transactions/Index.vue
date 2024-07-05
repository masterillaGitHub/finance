<script setup>

import TransactionGroup from "@/views/account/transactions/components/index/TransactionGroup.vue";
import {computed, onMounted, ref} from "vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {isUndefined} from "@/helpers/validators/index.js";
import {useIndexStore} from "@/stores/transactions/index.store.js";
import TheBottomLazyLoading from "@/views/account/transactions/components/index/TheBottomLazyLoading.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const indexStore = useIndexStore()
const transactionsGroups = computed(() => toGroupTransactions(Transaction.findLoaded()))
const isAddButton = ref(false)

onMounted(initComponent)

function initComponent() {
  setTimeout(() => {
    isAddButton.value = true
  },1000)

  indexStore.loadTransactions()
}

router.beforeEach((to, from) => {
  isAddButton.value = false
})

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
    class="pa-2"
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
      <TheBottomLazyLoading/>
    </v-card-text>
  </v-card>

    <v-fab
        :active="isAddButton"
        icon="mdi-plus"
        :to="{name: 'transactions.create'}"
        app
        class="mb-14"
    />
</div>
</template>

<style scoped>
</style>
