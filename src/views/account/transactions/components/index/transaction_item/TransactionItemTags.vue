<script setup>
import {isTransactionValid} from "@/helpers/validators/entities.js";
import {computed} from "vue";

const props = defineProps({
  transaction: {
    required: true,
    type: Object,
    validator: isTransactionValid
  }
})

const tags = computed(() => props.transaction.tags.map(t => t.name).join(', '))
</script>

<template>
  <div class="d-flex text-grey-darken-1">
    <div class="mr-2"><v-icon icon="mdi-tag-outline"/></div>
    <div class="text-truncate">{{tags}}</div>
  </div>
</template>

<style scoped>

</style>