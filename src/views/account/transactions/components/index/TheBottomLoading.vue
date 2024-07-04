<script setup>

import {computed, watch} from "vue";
import {useIndexStore} from "@/stores/transactions/index.store.js";
import {useAppStore} from "@/stores/app.store.js";


const appStore = useAppStore()
const indexStore = useIndexStore()
const isShowLazyLoading = computed(() => appStore.offsetBottom < 200 && !indexStore.isFirstLoad)
const isLazyLoadTransactions = computed(() => appStore.offsetBottom < 180)

watch(isLazyLoadTransactions, value => {
  if (value === true && !indexStore.isEmptyData) {
    indexStore.loadTransactions()
  }
})
</script>

<template>

  <v-fade-transition>
    <div v-if="isShowLazyLoading" class="mt-8 h-3 text-center">
      <v-progress-circular v-if="indexStore.transactionsLoading" indeterminate/>
      <div v-else-if="indexStore.isEmptyData">
        Більше транзакцій немає
      </div>
    </div>
  </v-fade-transition>
</template>

<style scoped>

</style>
