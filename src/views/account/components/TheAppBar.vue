<script setup>

import {ref} from "vue";
import {useAppStore} from "@/stores/app.store.js";
import {useRoute} from "vue-router";

const route = useRoute()
const appStore = useAppStore()
const density = ref('prominent')
const imgUrl = new URL('/assets/images/login.jpg', import.meta.url).href

</script>

<template>

  <v-app-bar
      :elevation="2"
  >
    <template v-slot:prepend>
      <v-btn
          size="small"
          icon="mdi-safe"
          :to="{name: 'main'}"
      />
    </template>

    <v-app-bar-title>
      <v-scroll-x-reverse-transition mode="out-in">
      <span :key="route.meta?.title">{{ route.meta?.title ?? '' }}</span>
      </v-scroll-x-reverse-transition>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn
          size="small"
          :icon="appStore.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="appStore.themeToggle()"
      />
      <v-btn
          icon="mdi-cog"
          size="small"
          :to="{name: 'settings.index'}"
      />
    </template>
  </v-app-bar>
</template>

<style scoped>
</style>
