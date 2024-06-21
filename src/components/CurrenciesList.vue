<script setup>
import {isCurrencyValid, validateCurrencyItems} from "@/helpers/validators/entities.js";

defineProps({
  currencies: {
    type: Array,
    required: true,
    validator: validateCurrencyItems
  }
})
const emit = defineEmits({
  selected: isCurrencyValid
})
</script>

<template>

  <v-list>
    <v-list-item
        v-for="currency in currencies"
        :key="currency.id"
        @click="emit('selected', currency)"
    >
      <v-list-item-title>{{ currency.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ currency.symbol}}, {{currency.alphabetic_code}}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>
