<script setup>
import AccountSum from "@/models_resources/models/AccountSum.js";
import {computed} from "vue";
import Currency from "@/models_resources/models/Currency.js";
import {integer, requiredZeroPossible} from "@/helpers/form_rules.js";
import {updateObject} from "@/helpers/functions.js";
import {isAccountSumValid} from "@/helpers/validators/entities.js";


const props = defineProps({
  accountSum: {
    type: Object,
    required: true,
    validator: a => a instanceof AccountSum
  },
  isAvailableRemove: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits({
  removeAccountSum: isAccountSumValid
})
const balanceModel = computed({
  get:() => props.accountSum.balance ?? 0,
  set: val => updateObject(props.accountSum, {balance: val})
})
const currency = computed(() => Currency.find(props.accountSum.getRelation('currency')))
const balanceRules = [
    integer,
    requiredZeroPossible
]

</script>

<template>
  <div class="d-flex align-center s-item">
    <div class="flex-grow-1">Баланс ({{currency.alphabetic_code}})</div>
    <div>
      <v-text-field
          v-model="balanceModel"
          :rules="balanceRules"
          density="compact"
          width="100"
          variant="underlined"
          class="s-text-field"
      >
        <template v-slot:append-inner>
          <span>{{ currency.symbol}}</span>
        </template>
      </v-text-field>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
