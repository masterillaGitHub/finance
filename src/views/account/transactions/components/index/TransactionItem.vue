<script setup>
import {toCurrency} from "@/helpers/functions.js";
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed} from "vue";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";

const props = defineProps({
  t: {
    type: Object,
    required: true,
    validator: isTransactionValid
  }
})

const amount = computed(() => getAmount(props.t.amount, props.t.currency.alphabetic_code))
const toAmount = computed(() => getAmount(props.t.to_amount, props.t.to_currency.alphabetic_code))
const isIncome = computed(() => props.t.amount > 0)
const isTypeTransfer = computed(() => props.t.type.id === TYPE_ID_TRANSFER)


function getAmount(amount, alphabeticCode) {
  return toCurrency(amount, alphabeticCode, {signDisplay: 'exceptZero'}).replace('-', '')
}
</script>

<template>
  <div class="d-flex justify-space-between">
    <div class="pa-2">
      <v-avatar size="" icon="mdi-cart"/>
    </div>
    <div class="d-flex flex-column flex-grow-1" style="min-width: 0;">
      <div class="d-flex flex-wrap flex-grow-1">
        <div class="s-text-truncate-wrapper mr-3">
          <div class="font-weight-bold text-truncate">{{t.category.name}}</div>
        </div>
        <div class="d-flex">
          <div :class="{'text-green': isIncome}">
            {{amount}}
          </div>
          <div
              v-if="isTypeTransfer && t.currency.id !== t.to_currency.id"
          >
            <v-icon icon="mdi-arrow-right-thin" class="mx-1 text-grey-darken-1"/>
            <span class="text-green">{{toAmount}}</span>
          </div>
        </div>

      </div>
      <div class="d-flex  text-grey-darken-1" >
          <div
              class="d-flex"
              :class="[isTypeTransfer ? 'w-50' : 'w-100']"
          >
              <v-icon icon="mdi-cash" class="mr-2"/>
              <span class="text-truncate">{{ t.account.name }}</span>
          </div>
          <div v-if="isTypeTransfer" class="d-flex w-50">
            <v-icon icon="mdi-arrow-right-thin" class="mx-1"/>
            <v-icon icon="mdi-cash" class="mr-2"/>
            <span class="text-truncate">{{ t.to_account?.name}}</span>
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

</style>
