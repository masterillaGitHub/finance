<script setup>

import {ref} from "vue";

const model = ref('accounts')
const testing = ref('good')
</script>

<template>
  <v-bottom-navigation
      grow
      v-model="model"
  >
    <v-btn
        :to="{name: 'dashboard'}"
        value="dashboard"
    >
      <v-icon>mdi-view-dashboard-outline</v-icon>

      <span>Дашборд</span>
    </v-btn>

    <v-btn
        :to="{name: 'accounts.index'}"
        value="accounts"
    >
      <v-icon>mdi-wallet-bifold-outline</v-icon>

      <span>Рахунки</span>
    </v-btn>

    <v-btn
        :to="{name: 'budgets'}"
        value="budgets"
    >
      <v-icon>mdi-receipt-text-edit-outline</v-icon>

      <span>Бюджет</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>
