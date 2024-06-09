<script setup>

import {computed} from "vue";
import {useRoute} from "vue-router";
import MainLayout from "@/views/layouts/MainLayout.vue";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import AccountLayout from "@/views/layouts/AccountLayout.vue";
import {useAuthStore} from "@/stores/auth.store.js";
import Snackbar from '@/components/Snackbar.vue'
import {useAppStore} from "@/stores/app.store.js";
import {LAYOUT_ACCOUNT} from "@/helpers/constants.js";
import AccountFullscreenLayout from "@/views/layouts/AccountFullscreenLayout.vue";

const authStore = useAuthStore()
const appStore = useAppStore()
const route = useRoute()

const isAuthLoading = computed(() => authStore.isLoading)

const layouts = {
  Main: MainLayout,
  Auth: AuthLayout,
  Account: AccountLayout,
  AccountFullscreen: AccountFullscreenLayout
}
const layout = computed(() => {
  const layoutName = route.meta.layout ?? LAYOUT_ACCOUNT
  return layouts[layoutName]
})


</script>

<template>
  <v-app
      :theme="appStore.theme"
  >
    <Snackbar/>

    <div v-if="isAuthLoading">
      <v-progress-linear
          indeterminate
      />
    </div>

    <template v-else>
      <v-slide-x-transition mode="out-in">
        <component :is="layout"/>
      </v-slide-x-transition>
    </template>
  </v-app>
</template>

<style scoped>
</style>
