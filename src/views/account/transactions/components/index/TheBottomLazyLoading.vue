<script setup>

import {computed, watch} from "vue";
import {useIndexStore} from "@/stores/transactions/index.store.js";
import {useAppStore} from "@/stores/app.store.js";


const appStore = useAppStore()
const indexStore = useIndexStore()
const isShowLazyLoading = computed(() => appStore.offsetBottom < 200 && indexStore.isAccessLazyLoad)
const isLoadTransactions = computed(() =>
    isShowLazyLoading.value && appStore.offsetBottom < 180 && !indexStore.isEmptyData
)

watch(isLoadTransactions, value => {
  if (value === true) {
    indexStore.lazyLoadTransactions()
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
