<script setup>

import {ref} from "vue";
import {useAppStore} from "@/stores/app.store.js";
import {useAuthStore} from "@/stores/auth.store.js";
import {useRouter} from "vue-router";

const router = useRouter()
const appStore = useAppStore()
const authStore = useAuthStore()
const logoutLoading = ref(false)

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
</script>

<template>

  <v-app-bar
      :elevation="2"
      density="compact"
  >
    <template v-slot:prepend>
      <v-btn
          size="small"
          icon="mdi-safe"
          :to="{name: 'main'}"
      />
    </template>

    <v-spacer></v-spacer>
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
  </v-app-bar>
</template>

<style scoped>

</style>
