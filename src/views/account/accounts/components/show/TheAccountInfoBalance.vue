<script setup>
import {toCurrency, toCurrencyUAH} from "@/helpers/functions.js";
import {computed} from "vue";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import {isAccountValid} from "@/helpers/validators/entities.js";

const props = defineProps({
  account: {
    required: true,
    type: Object,
    validator: isAccountValid
  }
})
const {toDecimal} = useCurrencyDecimalConvert()

const sums = computed(() => props.account.sums.filter(s => s.balance !== 0))
const sumsCount = computed(() => sums.value.length)
const isOtherSums = computed(() => !(sumsCount.value === 1 && sums.value[0].currency.id === 1))
const isCreditLimit = computed(() => props.account.credit_limit > 0)
const totalBalance = computed(() => props.account.getSumInMineCurrency())
const availableBalance = computed(() => props.account.credit_limit + totalBalance.value)

</script>

<template>

  <div class="subheading font-weight-light text-grey text-center">
    Поточний баланс<span v-if="sumsCount > 1">, в {{sumsCount}} валютах</span>
  </div>
  <div class="font-weight-bold text-center">{{ toCurrencyUAH(toDecimal(totalBalance)) }}</div>

  <div
      v-if="isCreditLimit"
      class="d-flex justify-space-around"
  >
    <div class="text-center">
      <div>Доступно</div>
      <div>{{toCurrencyUAH(toDecimal(availableBalance))}}</div>
    </div>
    <div class="text-center">
      <div>Ліміт</div>
      <div>{{ toCurrencyUAH(toDecimal(account.credit_limit))}}</div>
    </div>
  </div>

  <v-list v-if="isOtherSums">
    <v-list-item
        v-for="sum in sums"
        :key="sum.id"
        prepend-icon="mdi-flag-outline"
        class="s-list-item"
    >
      <template v-slot:title>
        <div class="d-flex justify-space-between">
          <div>{{ sum.currency.name}}</div>
          <div>{{ toCurrency(toDecimal(sum.balance), sum.currency.alphabetic_code)}}</div>
        </div>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>