<script setup>


import TheDialog from "@/components/DialogComponent.vue";
import TheCreateAccount from "@/views/account/accounts/components/create/TheCreateAccount.vue";
import {ref} from "vue";
import {useShowStore} from "@/stores/accounts/show.store.js";

const showStore = useShowStore()

const dialog = ref(showStore.editDialog)

</script>

<template>

  <TheDialog
      v-model="showStore.editDialog"
  >
    <TheCreateAccount
        :category-type="ACCOUNT_CATEGORY_BANK"
        @accountSave="showStore.editDialog = false"
        @dialogClose="showStore.editDialog = false"
    />
  </TheDialog>
</template>

<style scoped>

</style>
