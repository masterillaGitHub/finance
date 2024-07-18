<script setup>

import TheAppBar from "@/views/account/accounts/components/show/TheAppBar.vue";
import TheTitleSection from "@/views/account/accounts/components/show/TheTitleSection.vue";
import TheTransactions from "@/views/account/accounts/components/show/TheTransactions.vue";
import TheEditAccount from "@/views/account/accounts/components/update/TheEditAccount.vue";
import TheButtonAddTransaction from "@/views/account/accounts/components/show/TheButtonAddTransaction.vue";
</script>

<template>
  <TheAppBar />
  <TheTitleSection class="mb-4"/>
  <TheTransactions/>
  <TheButtonAddTransaction/>
  <TheEditAccount/>
</template>

<style scoped>

</style>
