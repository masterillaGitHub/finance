<script setup>

import {ref, watchEffect} from "vue";
import {useAppStore} from "@/stores/app.store.js";
import {useAuthStore} from "@/stores/auth.store.js";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const authStore = useAuthStore()
const logoutLoading = ref(false)
const density = ref('prominent')
const imgUrl = new URL('/assets/images/login.jpg', import.meta.url).href

async function logout() {
  logoutLoading.value = true
  try {
    await authStore.logout()
    await router.push({name: 'main'})
  }
  finally {
    logoutLoading.value = false
  }
}

watchEffect(() => {
  density.value = appStore.offsetTop <= 0 ? 'prominent' : 'comfortable'
})
</script>

<template>

  <v-app-bar
      :elevation="2"
      :density="density"
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
          icon="mdi-exit-run"
          size="small"
          :loading="logoutLoading"
          @click="logout()"
      />
    </template>
  </v-app-bar>
</template>

<style scoped>
</style>
