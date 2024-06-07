<script setup>

import {computed} from "vue";
import {useRoute} from "vue-router";
import MainLayout from "@/views/layouts/MainLayout.vue";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import AccountLayout from "@/views/layouts/AccountLayout.vue";
import {useAuthStore} from "@/stores/auth.store.js";
import Snackbar from '@/components/Snackbar.vue'

const authStore = useAuthStore()
const route = useRoute()

const isAuthLoading = computed(() => authStore.isLoading)

const layouts = {
  Main: MainLayout,
  Auth: AuthLayout,
  Account: AccountLayout,
}
const layout = computed(() => {
  const layoutName = route.meta.layout ?? 'Account'
  return layouts[layoutName]
})
</script>

<template>
  <v-app>
    <Snackbar/>
    <div v-if="isAuthLoading">
      <v-progress-linear
          indeterminate
      />
    </div>
    <div v-else>
      <component :is="layout"/>
    </div>
  </v-app>
</template>

<style scoped>
</style>
