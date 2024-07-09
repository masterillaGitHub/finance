<script setup>

defineProps({
  pathName: {
    type: String,
    required:true,
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <v-app-bar
      :elevation="2"
      density="compact"
  >
    <template v-slot:prepend>
      <v-btn
          icon="mdi-arrow-left"
          :to="{name: pathName}"
      />
    </template>
    <v-app-bar-title v-if="title">{{ title }}</v-app-bar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>

</style>
