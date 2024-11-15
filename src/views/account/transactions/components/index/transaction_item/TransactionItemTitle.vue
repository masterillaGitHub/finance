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

const title = computed(() => props.transaction.description || props.transaction.category.name)

</script>

<template>
  <div class="s-text-truncate-wrapper mr-3">
    <div class="font-weight-bold text-truncate">{{title}}</div>
  </div>
</template>

<style scoped>
.s-text-truncate-wrapper {
  flex: 1;
  min-width: 0;
}
</style>