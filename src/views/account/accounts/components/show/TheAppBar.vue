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
          :to="{name: 'accounts'}"
      />
    </template>
    <div>Monobank UAH, black</div>

    <v-spacer></v-spacer>
    <v-btn
        icon="mdi-pencil"
        @click="showStore.editDialog = true"
    />
  </v-app-bar>
</template>

<style scoped>

</style>
