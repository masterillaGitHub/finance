<script setup>
import {toCurrency} from "@/helpers/functions.js";
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed, ref} from "vue";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import TransactionItemAmount
    from "@/views/account/transactions/components/index/transaction_item/TransactionItemAmount.vue";
import TransactionItemAccounts
  from "@/views/account/transactions/components/index/transaction_item/TransactionItemAccounts.vue";
import TransactionItemTags
  from "@/views/account/transactions/components/index/transaction_item/TransactionItemTags.vue";
import TransactionItemTitle
  from "@/views/account/transactions/components/index/transaction_item/TransactionItemTitle.vue";
import TransactionItemNote
  from "@/views/account/transactions/components/index/transaction_item/TransactionItemNote.vue";

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
    amount: props.t.amount,
    amountDisplay: getAmount(convertor.toDecimal(props.t.amount), props.t.currency.alphabetic_code),
    isIncome,
  }

  if (isTypeTransfer.value) {
    toAccount.value = {
      name: props.t.transfer_transaction.account.name,
      icon: props.t.transfer_transaction.account.icon,
      amount: props.t.transfer_transaction.amount,
      amountDisplay: getAmount(
          convertor.toDecimal(props.t.transfer_transaction.amount),
          props.t.transfer_transaction.currency.alphabetic_code
      )
    }
  }

  // TODO: Need configure correct change place between account. If account have plus amount that account stay first
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
        <TransactionItemTitle
            :transaction="t"
        />
        <TransactionItemAmount
            :is-type-transfer="isTypeTransfer"
            :from-account="fromAccount"
            :to-account="toAccount"
        />
      </div>
      <TransactionItemAccounts
          :is-type-transfer="isTypeTransfer"
          :from-account="fromAccount"
          :to-account="toAccount"
      />
      <TransactionItemTags
          v-if="t.tags.length > 0"
          :transaction="t"
      />
      <TransactionItemNote
          v-if="t.note"
          :transaction="t"
      />
    </div>


  </div>
</template>

<style lang="postcss" scoped>
</style>
