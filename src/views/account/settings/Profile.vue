<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {ref} from "vue";
import {useRouter} from "vue-router";
import FullscreenAppBar from "@/components/FullscreenAppBar.vue";

const router = useRouter()
const auth = useAuthStore()

const logoutLoading = ref(false)

async function logout() {
  logoutLoading.value = true

  try {
    await auth.logout()
    await router.push({name: 'main'})
  }
  finally {
    logoutLoading.value = false
  }
}
</script>

<template>
<div class="pa-2">

  <FullscreenAppBar
      path-name="settings.index"
      title="Профіль"
  />
  <v-card :title="auth?.user?.name" :subtitle="auth?.user?.email">
    <v-card-actions>
      <v-btn
          variant="outlined"
          block
          :loading="logoutLoading"
          @click="logout()"
      >Вийти з профілю</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<style scoped>

</style>
