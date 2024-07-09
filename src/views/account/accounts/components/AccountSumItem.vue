<script setup>
import AccountSum from "@/models_resources/models/AccountSum.js";
import {computed, ref} from "vue";
import Currency from "@/models_resources/models/Currency.js";
import {integer, requiredZeroPossible} from "@/helpers/form_rules.js";
import {updateObject} from "@/helpers/functions.js";
import {isAccountSumValid} from "@/helpers/validators/entities.js";
import BottomCalculator from "@/components/BottomCalculator.vue";


const props = defineProps({
  accountSum: {
    type: Object,
    required: true,
    validator: a => a instanceof AccountSum
  },
  isAvailableRemove: {
    type: Boolean,
    required: false
  }
})
const emit = defineEmits({
  removeAccountSum: isAccountSumValid
})

const isCalcShow = ref()
const balance = computed(() => props.accountSum.balance ?? 0)
const currency = computed(() => Currency.find(props.accountSum.getRelation('currency')))
const balanceRules = [
    integer,
    requiredZeroPossible
]

function updateAccountSum(val) {
  updateObject(props.accountSum, {balance: val})
}

</script>

<template>
  <div class="d-flex align-center s-item">
    <div class="d-flex align-center">Баланс ({{currency.alphabetic_code}})</div>
    <div
        class="flex-grow-1 d-flex justify-end align-center text-h6"
        @click="isCalcShow = true"
    >

      <span class="mr-2">{{balance}}</span>
      <span>{{ currency.symbol}}</span>

      <BottomCalculator
          v-model="isCalcShow"
          :start-sum="balance"
          @done="updateAccountSum($event)"
      />
    </div>
    <div
        class="align-self-center"
        v-if="isAvailableRemove"
    >
      <v-btn
          variant="text"
          icon="mdi-close"
          @click="emit('removeAccountSum', accountSum)"
      />
    </div>
  </div>
</template>

<style scoped>
.s-text-field :deep(.v-field__input) {
  text-align: right;
}

.s-item {
  margin-left: -24px;
  width: calc(100% + 47px);
  padding: 5px 10px;

  > div {
    height: 70px;
  }
}
</style>
