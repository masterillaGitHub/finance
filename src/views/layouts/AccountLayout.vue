<script setup>
import TheButtonNavigation from "@/views/account/components/TheButtonNavigation.vue";
import TheAppBar from "@/views/account/components/TheAppBar.vue";
</script>

<template>
<div class="fill-height">

  <TheAppBar/>
  <v-main class="bg-grey-lighten-3 fill-height">
    <div class="pa-2" >

      <RouterView v-slot="{Component}">
        <v-slide-x-transition mode="out-in">
          <component :is="Component"/>
        </v-slide-x-transition>
      </RouterView>
    </div>
  </v-main>

  <TheButtonNavigation />
</div>
</template>

<style scoped>

</style>
