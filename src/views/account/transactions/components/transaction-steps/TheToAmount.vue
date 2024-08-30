<script setup>

import {computed, onMounted, ref} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import CurrenciesList from "@/components/CurrenciesList.vue";
import {useCurrenciesStore} from "@/stores/currencies.store.js";
import BottomCalculator from "@/components/BottomCalculator.vue";
import {STEP_TO_AMOUNT} from "@/services/transaction/step_transition_service.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import {isEmpty} from "@/helpers/validators/index.js";

const {toDecimal, toPlus, toInteger} = useCurrencyDecimalConvert()
const formStore = useFormStore()
const currencyStore = useCurrenciesStore()

const isCalcShow = ref(false)
const toAmount = computed(() => toDecimal(formStore.toAmount))

onMounted(() => {
  initToAmount()
  initToCurrencyId()
})

function initToAmount() {
  if (isEmpty(formStore.toAmount)) {
    formStore.toAmount = toPlus(formStore.amount)
  }
}

function initToCurrencyId() {
  if (isEmpty(formStore.toCurrencyId)) {
    formStore.toCurrencyId = formStore.currencyId
  }
}

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
              <span v-else key="1">{{toAmount}} {{ formStore.getToCurrency.symbol }}</span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex justify-end align-center pa-2">
        <div class="text-right d-flex align-center" @click="isCalcShow = true">
          <span class="text-h5 ">{{toAmount}}</span>
          <v-icon v-if="!formStore.isAmountValid" color="error" icon="mdi-alert-circle"/>
        </div>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
                variant="flat"
                class="s-btn"
                v-bind="props"
                append-icon="mdi-chevron-down"
            >
              <v-icon :icon="formStore.getToCurrency.icon"/>
            </v-btn>
          </template>
          <CurrenciesList
              :currencies="currencyStore.currencies"
              @selected="formStore.toCurrencyId = $event.id"
          />
        </v-menu>
      </div>
      <BottomCalculator
          v-model="isCalcShow"
          :start-sum="toAmount"
          @done="formStore.toAmount = toInteger($event)"
      />
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
