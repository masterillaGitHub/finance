<script setup>
import TheButtonNavigation from "@/views/account/components/TheButtonNavigation.vue";
import TheAppBar from "@/views/account/components/TheAppBar.vue";
</script>

<template>
  <TheAppBar/>
  <v-main class="bg-grey-lighten-3">
    <div class="pa-2" >
      <RouterView/>
    </div>
  </v-main>

  <TheButtonNavigation />
</template>

<style scoped>

</style>
