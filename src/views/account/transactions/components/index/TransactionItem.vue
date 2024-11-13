<script setup>
import {toCurrency} from "@/helpers/functions.js";
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed, ref} from "vue";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";

const props = defineProps({
  t: {
    type: Object,
    required: true,
    validator: isTransactionValid
  }
})
const convertor = useCurrencyDecimalConvert()

const isTypeTransfer = computed(() => props.t.type.id === TYPE_ID_TRANSFER)
const fromAccount = ref({})
const toAccount = ref({})

function initAccounts() {
  const isIncome = props.t.amount > 0

  fromAccount.value = {
    name: props.t.account.name,
    icon: props.t.account.icon,
    amount: getAmount(convertor.toDecimal(props.t.amount), props.t.currency.alphabetic_code),
    isIncome,
  }

  if (isTypeTransfer.value) {
    toAccount.value = {
      name: props.t.transfer_transaction.account.name,
      icon: props.t.transfer_transaction.account.icon,
      amount: getAmount(
          convertor.toDecimal(props.t.transfer_transaction.amount),
          props.t.transfer_transaction.currency.alphabetic_code
      )
    }
  }

  // if (isIncome) {
  //   const tempFromAccount = fromAccount.value
  //   fromAccount.value = toAccount.value
  //   toAccount.value = tempFromAccount
  // }
}

function getAmount(amount, alphabeticCode) {
  return toCurrency(amount, alphabeticCode, {signDisplay: 'exceptZero'}).replace('-', '')
}

initAccounts()
</script>

<template>
  <div class="d-flex justify-space-between">
    <div class="pa-2">
      <v-avatar size="small">
        <v-icon size="large" :icon="t.category.icon"/>
      </v-avatar>
    </div>
    <div class="d-flex flex-column flex-grow-1" style="min-width: 0;">
      <div class="d-flex flex-wrap flex-grow-1">
        <div class="s-text-truncate-wrapper mr-3">
          <div class="font-weight-bold text-truncate">{{t.category.name}}</div>
        </div>
        <div class="d-flex">
          <div :class="{'text-green': fromAccount.isIncome}">
            {{fromAccount.amount}}
          </div>
          <div
              v-if="isTypeTransfer && fromAccount.amount !== toAccount.amount"
          >
            <v-icon icon="mdi-arrow-right-thin" class="mx-1 text-grey-darken-1"/>
            <span class="text-green">{{toAccount.amount}}</span>
          </div>
        </div>

      </div>
      <div class="d-flex  text-grey-darken-1" >
          <div
              class="d-flex s-min-width-0 "
              :class="[isTypeTransfer ? 's-max-width-70' : 'w-100']"
          >
              <v-icon :icon="fromAccount.icon" class="mr-2"/>
              <span class="text-truncate">{{ fromAccount.name }}</span>
          </div>
          <div v-if="isTypeTransfer" class="d-flex s-min-width-0 s-max-width-70">
            <v-icon icon="mdi-arrow-right-thin" class="mx-1"/>
            <v-icon :icon="toAccount.icon" class="mr-2"/>
            <span class="text-truncate">{{ toAccount.name}}</span>
          </div>
      </div>
    </div>


  </div>
</template>

<style lang="postcss" scoped>
.s-text-truncate-wrapper {
  flex: 1;
  min-width: 0;
}

.s-min-width-0 {
  min-width: 0;
}

.s-max-width-70 {
  max-width: 70%;
}

</style>
