<script setup>

import TheAppBar from "@/views/account/accounts/components/show/TheAppBar.vue";
import TheWealthChart from "@/views/account/accounts/components/show/TheWealthChart.vue";
import TheTransactions from "@/views/account/accounts/components/show/TheTransactions.vue";
import TheCreateAccount from "@/views/account/accounts/components/show/TheCreateAccount.vue";
</script>

<template>
  <TheAppBar />
  <TheWealthChart class="mb-4"/>
  <TheTransactions/>
  <TheCreateAccount/>
</template>

<style scoped>

</style>
