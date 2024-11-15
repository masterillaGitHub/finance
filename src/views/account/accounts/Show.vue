<script setup>

import TheAppBar from "@/views/account/accounts/components/show/TheAppBar.vue";
import TheAccountInfo from "@/views/account/accounts/components/show/TheAccountInfo.vue";
import TheTransactions from "@/views/account/accounts/components/show/TheTransactions.vue";
import TheEditAccount from "@/views/account/accounts/components/update/TheEditAccount.vue";
import TheButtonAddTransaction from "@/views/account/accounts/components/show/TheButtonAddTransaction.vue";
import {useShowStore} from "@/stores/accounts/show.store.js";
import {computed} from "vue";
import {ACCOUNT_TYPE_INTERNAL} from "@/helpers/constants.js";

const showStore = useShowStore()

const account = computed(() => showStore.getAccount)
</script>

<template>
  <TheAppBar />
  <TheAccountInfo class="mb-4"/>
  <template v-if="account.place_type === ACCOUNT_TYPE_INTERNAL">
    <TheTransactions/>
    <TheButtonAddTransaction/>
  </template>
  <TheEditAccount/>
</template>

<style scoped>

</style>
