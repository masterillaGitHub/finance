<script setup>

import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import MainLayout from "@/views/layouts/MainLayout.vue";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import AccountLayout from "@/views/layouts/AccountLayout.vue";

const route = useRoute()

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
    <component :is="layout"/>
  </v-app>
</template>

<style scoped>
</style>
