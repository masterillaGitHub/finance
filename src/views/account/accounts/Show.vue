<script setup>

import TheAppBar from "@/views/account/accounts/components/show/TheAppBar.vue";
import TheWealthChart from "@/views/account/accounts/components/show/TheWealthChart.vue";
import TheTransactions from "@/views/account/accounts/components/show/TheTransactions.vue";
import TheShowAccount from "@/views/account/accounts/components/show/TheShowAccount.vue";
</script>

<template>
  <TheAppBar />
  <TheWealthChart class="mb-4"/>
  <TheTransactions/>
<!--  <TheShowAccount/>-->
</template>

<style scoped>

</style>
