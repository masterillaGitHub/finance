<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {computed, watch} from "vue";
import {useRouter} from "vue-router";

const store = useAuthStore()
const router = useRouter()


const isNotAuth = computed(() => store.isNotAuth)

watch(isNotAuth, () => {
  checkAuth()
})

function checkAuth() {
  if (isNotAuth.value) {
    router.push({name: 'login'})
  }
}

checkAuth()
</script>

<template>
  <v-main class="pa-2">
    <RouterView/>
  </v-main>
</template>

<style scoped>

</style>
