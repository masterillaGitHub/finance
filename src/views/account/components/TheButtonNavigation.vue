<script setup>

import {ref} from "vue";

const model = ref('accounts')
const testing = ref('good')

const menus = [
  {title: 'Дашборд', value: 'dashboard', icon: 'mdi-view-dashboard-outline', path:{name: 'dashboard'}},
  {title: 'Рахунки', value: 'accounts', icon: 'mdi-wallet-bifold-outline', path:{name: 'accounts.index'}},
  {title: 'Транзацкії', value: 'transactions', icon: 'mdi-bank-transfer', path:{name: 'transactions.index'}},
  {title: 'Бюджет', value: 'budgets', icon: 'mdi-receipt-text-edit-outline', path:{name: 'budgets.index'}},
]
</script>

<template>
  <v-bottom-navigation
      grow
      v-model="model"
  >
    <v-btn
        v-for="menu in menus"
        :key="menu.value"
        :to="menu.path"
        :value="menu.value"
    >
      <v-icon :icon="menu.icon"/>

      <span class="text-truncate">{{ menu.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>
