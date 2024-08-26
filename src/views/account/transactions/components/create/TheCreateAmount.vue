<script setup>
import CurrenciesList from "@/components/CurrenciesList.vue";
import {onMounted} from "vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import {useFormStore} from "@/stores/transactions/form.store.js";

defineProps({
  amount: {
    type: [String, Number],
    default: '0',
  }
})
const emit = defineEmits([
  'onClickOnAmount'
])
const formStore = useFormStore()
const currencyStore = useCurrenciesStore()

onMounted(initComponent)

async function initComponent() {
  await currencyStore.loadCurrencies()
}

</script>

<template>
  <div class="d-flex justify-end align-center pa-2">
    <div class="text-right mr-4 d-flex align-center" @click="emit('onClickOnAmount')">
      <span class="text-h3 ">{{amount}}</span>
      <v-icon v-if="!formStore.isAmountValid" color="error" icon="mdi-alert-circle"/>
    </div>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
            variant="outlined"
            class="s-btn"
            v-bind="props"
            append-icon="mdi-chevron-down"
            :loading="currencyStore.loading"
        >
          <v-icon :icon="formStore.getCurrency.icon"/>
        </v-btn>
      </template>
      <CurrenciesList
          :currencies="currencyStore.currencies"
          @selected="formStore.currencyId = $event.id"
      />
    </v-menu>
  </div>
</template>

<style scoped>
.s-btn :deep(.v-btn__content) {
  font-size: 16px;
}
</style>
