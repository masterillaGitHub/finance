<script setup>
import {computed} from "vue";
import Currency from "@/models_resources/models/Currency.js";
import {isCurrencyValid} from "@/helpers/validators/entities.js";
import CurrenciesList from "@/components/CurrenciesList.vue";


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
    <CurrenciesList
        :currencies="currencies"
        @selected="emit('selectedCurrency', $event)"
    />
  </v-menu>
</div>
</template>

<style scoped>

</style>
