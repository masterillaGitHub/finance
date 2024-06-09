<script setup>


import TheDialog from "@/components/TheDialog.vue";
import TheCreateAccount from "@/views/account/accounts/components/create/TheCreateAccount.vue";
import {ACCOUNT_TYPE_BANK} from "@/helpers/constants.js";
import {ref} from "vue";
import {useShowStore} from "@/stores/accounts/show.store.js";

const showStore = useShowStore()

const dialog = ref(showStore.editDialog)
// const dialog = ref(false)

</script>

<template>

  <TheDialog
      v-model="showStore.editDialog"
  >
    <TheCreateAccount
        :account-type="ACCOUNT_TYPE_BANK"
        @accountSave="showStore.editDialog = false"
        @dialogClose="showStore.editDialog = false"
    />
  </TheDialog>
</template>

<style scoped>

</style>
