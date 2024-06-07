<script setup>
import {useAuthStore} from "@/stores/auth.store.js";

const store = useAuthStore();
</script>

<template>

  <h2 class="text-center py-3 mb-5">Finance</h2>
  <div class="d-flex flex-column align-items-center s-buttons">
    <v-btn
        v-if="store.isAuth"
        :to="{name: 'dashboard'}"
    >
      Dashboard
    </v-btn>
    <v-btn v-if="store.isNotAuth" :to="{name: 'login'}">
      Login
    </v-btn>
    <v-btn v-if="store.isNotAuth" :to="{name: 'register'}">
      Register
    </v-btn>

  </div>
</template>

<style scoped>
  .s-buttons a {
    margin-top: 10px;
  }
</style>
