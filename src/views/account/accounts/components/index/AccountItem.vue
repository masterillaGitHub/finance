<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";
import Account from '@/models_resources/models/Account.js'
import {computed} from "vue";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import {ACCOUNT_TYPE_EXTERNAL, ACCOUNT_TYPES} from "@/helpers/constants.js";

const props = defineProps({
  account: {
    type: Object,
    required: true,
    validator: account => account instanceof Account
  },
})
const {toDecimal} = useCurrencyDecimalConvert()

const sum = computed(() =>
    toCurrencyUAH(
        toDecimal(props.account.getSumInMineCurrency()),
        {maximumFractionDigits: 0}
    )
)

</script>

<template>
<v-list-item
    :to="{name: 'accounts.show', params: {id: account.id}}"
    class="s-list-item"
>
  <template v-slot:prepend>
    <v-avatar
        class="s-handle-sorting-account-item"
        :icon="account.icon"
        color="green"
    />
  </template>
  <template v-slot:title>
    <div class="d-flex justify-space-between">
      <div class="text-truncate">{{account.name}}</div>
      <div class="ml-2">
        <span v-if="account.place_type === ACCOUNT_TYPE_EXTERNAL">
          {{ACCOUNT_TYPES[1].label}}
        </span>
        <span v-else>{{ sum }}</span>
      </div>
    </div>
  </template>
</v-list-item>
</template>

<style scoped>
.s-list-item :deep(.v-list-item__spacer) {
  width: 10px;
}
</style>
