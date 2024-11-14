<script setup>

import TheWealthChart from "@/views/account/accounts/components/index/TheWealthChart.vue";
import TheAccounts from "@/views/account/accounts/components/index/TheAccounts.vue";
import TheAddAccount from "@/views/account/accounts/components/create/TheAddAccount.vue";
import BankAccountResource from "@/models_resources/resources/BankAccountResource.js";
import {BANK_ID_MONO} from "@/helpers/constants.js";
import {ref} from "vue";

const accountLoading = ref(false)
const updateAccounts = async () => {
  accountLoading.value = true
  try {
    await BankAccountResource.updateTransactions(BANK_ID_MONO)
  }
  finally {
    accountLoading.value = false
  }
}

</script>

<template>
  <div class="pa-2">
    <TheWealthChart class="mb-4"/>
    <TheAccounts class="mb-5"/>
    <TheAddAccount/>
    <v-btn
        variant="outlined"
        :loading="accountLoading"
        @click="updateAccounts"
    >
      <v-icon icon="mdi-sync"/>
    </v-btn>
  </div>
</template>

<style scoped>

</style>
