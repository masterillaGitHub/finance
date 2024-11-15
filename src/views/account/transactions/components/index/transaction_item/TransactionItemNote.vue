<script setup>
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed} from "vue";

defineProps({
  transaction: {
    required: true,
    type: Object,
    validator: isTransactionValid
  }
})

</script>

<template>
  <div class="d-flex text-grey-darken-1">
    <div class="mr-2"><v-icon icon="mdi-text"/></div>
    <div class="text-truncate">{{transaction.note}}</div>
  </div>
</template>

<style scoped>

</style>