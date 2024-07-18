<script setup>

import TransactionGroup from "@/views/account/transactions/components/index/TransactionGroup.vue";
import TheBottomLazyLoading from "@/views/account/transactions/components/index/TheBottomLazyLoading.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import Transaction from "@/models_resources/models/Transaction.js";
import {useIndexStore} from "@/stores/transactions/index.store.js";
import {toGroupTransactions} from "@/services/transaction/collection_service.js";
import {useRoute} from "vue-router";

const route = useRoute()
const indexStore = useIndexStore()

const isLazyLoadEnable = computed(() => indexStore.isAccessLazyLoad && !indexStore.isEmptyData)
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
  indexStore.addSyncParams({
    'filter[account_id]': route.params.id
  })

  try {
    await indexStore.firstLoadTransactions()
  }
  finally {
    transactionsLoading.value = false
  }
}

const load = () => {
  indexStore.lazyLoadTransactions()
}
</script>

<template>
  <v-fade-transition mode="out-in">
    <v-progress-linear v-if="transactionsLoading" indeterminate />
    <v-card v-else>
      <template v-if="!transactions.length">
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

        <TheBottomLazyLoading
            :show="90"
            :enable="isLazyLoadEnable"
            @load="load"
        />
      </v-card-text>

    </v-card>
  </v-fade-transition>
</template>

<style scoped>

</style>
