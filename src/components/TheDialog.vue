<script setup>

import {useDisplay} from "vuetify";

const { mobile } = useDisplay()
const dialog = defineModel()

</script>

<template>
  <v-dialog
      max-width="600"
      :fullscreen="mobile"
      v-model="dialog"
  >
    <slot></slot>
  </v-dialog>
</template>

<style scoped>

</style>
