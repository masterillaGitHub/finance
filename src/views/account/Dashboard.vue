<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {computed, ref} from "vue";

const store = useAuthStore()

const logoutLoading = ref(false)
const auth = computed(() => store.user)

function getAuth() {
  store.loadUser()
}
</script>

<template>
<div>

  <div class="mb-2">
    <v-btn
        text="get auth"
        @click="getAuth"
    />
  </div>
  <v-alert
      v-if="auth"
      icon="$vuetify"
      title="User data"
      :text="`id ${auth.id}, name ${auth.name}, email ${auth.email}`"
      type="info"
      variant="tonal"
  ></v-alert>

</div>
</template>

<style scoped>

</style>
