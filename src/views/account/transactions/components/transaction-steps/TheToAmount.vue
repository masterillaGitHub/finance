<script setup>

import {computed, onMounted, ref} from "vue";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import CurrenciesList from "@/components/CurrenciesList.vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import BottomCalculator from "@/components/BottomCalculator.vue";
import {STEP_TO_AMOUNT} from "@/services/transaction/step_transition_service.js";

const createStore = useCreateStore()
const currencyStore = useCurrenciesStore()

const isCalcShow = ref(false)
const amountModel = computed({
  get: () => createStore.toAmount,
  set: val => createStore.toAmount = val
})

onMounted(() => {
  createStore.toAmount = createStore.amount
  createStore.toCurrencyId = createStore.currencyId
})

</script>

<template>

  <v-expansion-panel :value="STEP_TO_AMOUNT">
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Переказати:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <span v-if="expanded" key="0" class="text-grey">Вкажіть суму зарахування</span>
              <span v-else key="1">{{createStore.toAmount}} {{ createStore.getToCurrency.symbol }}</span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex justify-end align-center pa-2">
        <div class="text-right d-flex align-center" @click="isCalcShow = true">
          <span class="text-h5 ">{{createStore.toAmount}}</span>
          <v-icon v-if="!createStore.isAmountValid" color="error" icon="mdi-alert-circle"/>
        </div>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
                variant="flat"
                class="s-btn"
                v-bind="props"
                append-icon="mdi-chevron-down"
            >
              <v-icon :icon="createStore.getToCurrency.icon"/>
            </v-btn>
          </template>
          <CurrenciesList
              :currencies="currencyStore.currencies"
              @selected="createStore.toCurrencyId = $event.id"
          />
        </v-menu>
      </div>
      <BottomCalculator
          v-model="isCalcShow"
          :start-sum="createStore.toAmount"
          @done="createStore.toAmount = $event"
      />
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
