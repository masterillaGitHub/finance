<script setup>

import DialogComponent from "@/components/DialogComponent.vue";
import TheUpdateAccount from "@/views/account/accounts/components/update/TheUpdateAccount.vue";
import {useShowStore} from "@/stores/accounts/show.store.js";

const showStore = useShowStore()

</script>

<template>
  <DialogComponent
      v-model="showStore.editDialog"
  >
    <TheUpdateAccount
        @account-update="showStore.editDialog = false"
        @dialog-close="showStore.editDialog = false"
    />
  </DialogComponent>

</template>

<style lang="postcss" scoped>
</style>
