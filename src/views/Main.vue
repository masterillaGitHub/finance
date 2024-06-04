<script setup>

</script>

<template>

  <h2 class="text-center py-3 mb-5">Finance</h2>
  <div class="d-flex flex-column align-items-center s-buttons">
    <v-btn :to="{name: 'login'}">
      Login
    </v-btn>
    <v-btn :to="{name: 'register'}">
      Register
    </v-btn>
    <v-btn :to="{name: 'dashboard'}">
      Dashboard
    </v-btn>

  </div>
</template>

<style scoped>
  .s-buttons a {
    margin-top: 10px;
  }
</style>
