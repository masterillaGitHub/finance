<script setup>

import TheCreateAmount from "@/views/account/transactions/components/TheCreateAmount.vue";
import BottomCalculator from "@/components/BottomCalculator.vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import {computed, ref, watch} from "vue";
import {TYPE_ID_EXPENSE, TYPE_ID_INCOME, TYPE_ID_TRANSFER} from "@/helpers/constants.js";

const props = defineProps({
  isCalcShow: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false,
  }
})

const formStore = useFormStore()
const {toInteger, toMinus, toPlus, toDecimal} = useCurrencyDecimalConvert()
const isCalcShow = ref(props.isCalcShow)
const amount = computed(() =>
    toPlus(toDecimal(formStore.amount))
)
const typeId = computed(() => formStore.typeId)

watch(typeId, () => {
    formStore.amount = handleAmount(formStore.amount)
})

const handleAmount = val => {
  switch (formStore.typeId) {
    case TYPE_ID_EXPENSE:
    case TYPE_ID_TRANSFER:
      return toMinus(val)
    case TYPE_ID_INCOME:
      return toPlus(val)
  }
}

const setAmount = val => {
  formStore.amount = handleAmount(toInteger(val))
}

const openCalculator = () => {
  if (props.readonly) {
    return
  }

  isCalcShow.value = true
}
</script>

<template>

  <TheCreateAmount
      :amount="amount"
      :readonly="readonly"
      @on-click-on-amount="openCalculator"
  />

  <BottomCalculator
      v-model="isCalcShow"
      :start-sum="amount"
      @done="setAmount($event)"
  />
</template>

<style scoped>

</style>
