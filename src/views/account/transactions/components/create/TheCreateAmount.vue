<script setup>
import CurrenciesList from "@/components/CurrenciesList.vue";
import {onMounted} from "vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import Currency from "@/models_resources/models/Currency.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";

defineProps({
  amount: {
    type: [String, Number],
    default: '0',
  }
})
const emit = defineEmits([
  'onClickOnAmount'
])
const createStore = useCreateStore()
const currencyStore = useCurrenciesStore()

onMounted(initComponent)

async function initComponent() {
  await currencyStore.loadCurrencies()
  createStore.currency = Currency.find(1)
}

</script>

<template>
  <div class="d-flex justify-end align-center pa-2">
    <div class="text-right text-h3 mr-4" @click="emit('onClickOnAmount')">{{amount}}</div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
            variant="outlined"
            class="s-btn"
            v-bind="props"
            append-icon="mdi-chevron-down"
            :loading="currencyStore.loading"
        >
          <v-icon :icon="createStore.currency.icon"/>
        </v-btn>
      </template>
      <CurrenciesList
          :currencies="currencyStore.currencies"
          @selected="createStore.currency = $event"
      />
    </v-menu>
  </div>
</template>

<style scoped>
.s-btn :deep(.v-btn__content) {
  font-size: 16px;
}
</style>
