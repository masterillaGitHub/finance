<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {computed, ref} from "vue";

const store = useAuthStore()

const logoutLoading = ref(false)
const auth = computed(() => store.user)

function getAuth() {
  store.loadUser()
}
async function logout() {
  logoutLoading.value = true
  try {
    await store.logout()
  }
  finally {
    logoutLoading.value = false
  }

}
</script>

<template>
  <div class="text-right">
    <v-btn
        icon="mdi-exit-run"
        size="x-small"
        :loading="logoutLoading"
        @click="logout()"
    />
  </div>
  <div>
    <v-btn
        text="get auth"
        @click="getAuth"
    />
  </div>
  <div>Content</div>
  <div>{{ auth }}</div>

</template>

<style scoped>

</style>
