<script setup>

import AccountGroupItem from "@/views/account/accounts/components/index/AccountGroupItem.vue";

const accounts = [
  {title: 'Готівка', sum: 30000},
  {title: 'Банківські рахунки', sum: 120},
  {title: 'Борги', sum: 100},
  {title: 'Інші активи', sum: 456000},
]

</script>

<template>

  <v-expansion-panels>
    <AccountGroupItem
        v-for="(account, idx) in accounts"
        :key="idx"

        :account="account"
    />
  </v-expansion-panels>
</template>

<style scoped>
</style>
