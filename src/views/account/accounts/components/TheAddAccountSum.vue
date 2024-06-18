<script setup>
import {computed} from "vue";
import Currency from "@/models_resources/models/Currency.js";
import {isCurrencyValid} from "@/helpers/validators/entities.js";


const emit = defineEmits({
  selectedCurrency: isCurrencyValid
})

const currencies = computed(() => Currency.all())
</script>

<template>
<div>

  <v-divider class="mb-3"/>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
          v-bind="props"
      >
        Додати валюту
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="currency in currencies"
          :key="currency.id"
          @click="emit('selectedCurrency', currency)"
      >
        <v-list-item-title>{{ currency.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ currency.symbol}}, {{currency.alphabetic_code}}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-menu>
</div>
</template>

<style scoped>

</style>
