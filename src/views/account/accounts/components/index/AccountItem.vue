<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";
import {useShowStore} from "@/stores/accounts/show.store.js";

defineProps({
  icon: String,
  name: String,
  sum: Number
})
const accountShowStore = useShowStore()
</script>

<template>

  <v-list-item
      :prepend-icon="icon"
      v-ripple
      :to="{name: 'accounts.show', params: {id:1}}"
  >
    <template v-slot:title>
      <div class="d-flex justify-space-between">
        <div>{{name}}</div>
        <div>
          <span>{{ toCurrencyUAH(sum, {minimumFractionDigits: 0})}}</span>
        </div>
      </div>
    </template>
  </v-list-item>

  <v-divider inset></v-divider>
</template>

<style scoped>

</style>
