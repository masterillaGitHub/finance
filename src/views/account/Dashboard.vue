<script setup>

const imgUrl = new URL('/assets/images/icons/favicon.svg', import.meta.url).href
</script>

<template>
<div class="pa-2">
  <v-alert
      :icon="imgUrl"
      type="info"
      variant="tonal"
  >
    <template #prepend>
      <v-avatar :image="imgUrl"/>
    </template>
    <template #text>
      Welcome to <b>Denarius</b> - the world of finance
    </template>
  </v-alert>

</div>
</template>

<style scoped>

</style>
