<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";
import Account from '@/models_resources/models/Account.js'

defineProps({
  account: {
    type: Object,
    required: true,
    validator: account => account instanceof Account
  },
  icon: String,
})

</script>

<template>
<v-list-item
    :to="{name: 'accounts.show', params: {id:1}}"
    class="s-list-item"
>
  <template v-slot:prepend>
    <v-avatar
        class="s-handle-sorting-account-item"
        :icon="icon"
        color="green"
    />
  </template>
  <template v-slot:title>
    <div class="d-flex justify-space-between">
      <div class="text-truncate">{{account.name}}</div>
      <div>
        <span>{{ toCurrencyUAH(account.getSum(), {minimumFractionDigits: 0})}}</span>
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
