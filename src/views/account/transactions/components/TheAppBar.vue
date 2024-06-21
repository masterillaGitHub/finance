<script setup>
import {useShowStore} from "@/stores/accounts/show.store.js";

const showStore = useShowStore()

</script>

<template>
  <v-app-bar
      :elevation="2"
      density="compact"
  >
    <template v-slot:prepend>
      <v-btn
          icon="mdi-arrow-left"
          :to="{name: 'transactions.index'}"
      />
    </template>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>

</style>
