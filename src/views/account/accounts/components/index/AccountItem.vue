<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";

defineProps({
  element: Object
})

</script>

<template>
<v-list-item
    :to="{name: 'accounts.show', params: {id:1}}"
>
  <template v-slot:prepend>
    <v-icon class="s-handle-sorting-account-item" :icon="element.icon"/>
  </template>
  <template v-slot:title>
    <div class="d-flex justify-space-between">
      <div>{{element.name}}</div>
      <div>
        <span>{{ toCurrencyUAH(element.sum, {minimumFractionDigits: 0})}}</span>
      </div>
    </div>
  </template>
</v-list-item>
</template>

<style scoped>

</style>
