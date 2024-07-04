<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed} from "vue";

const props = defineProps({
  t: {
    type: Object,
    required: true,
    validator: isTransactionValid
  }
})

const amount = computed(() =>
    toCurrencyUAH(props.t.amount, {signDisplay: 'exceptZero'}).replace('-', '')
)
const isIncome = computed(() => props.t.amount > 0)

</script>

<template>
  <div class="d-flex">
    <div class="pa-2">
      <v-avatar size="" icon="mdi-cart"/>
    </div>
    <div class="s-dynamic-truncate-parent mr-3">
      <div class="font-weight-bold _truncate-child">{{t.category.name}}</div>
      <div class="text-grey-darken-1  _truncate-child">
        <v-icon icon="mdi-cash" class="mr-2"/>
        <span>{{ t.account.name }}</span>
      </div>
      <div v-if="t.note" class="text-grey-darken-1  _truncate-child">
        <v-icon icon="mdi-text" class="mr-2"/>
        <span>{{t.note}}</span>
      </div>
    </div>
    <div :class="{'text-green': isIncome}">
      {{amount}}
    </div>

  </div>
</template>

<style lang="postcss" scoped>
.s-dynamic-truncate-parent {
  flex: 1;
  min-width: 0;

  & > ._truncate-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
