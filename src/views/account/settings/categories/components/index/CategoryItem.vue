<script setup>

import {isTransactionCategoryValid} from "@/helpers/validators/entities.js";
import {useSettingsCategories} from "@/stores/settings/categories.store.js";

const store = useSettingsCategories()

defineProps({
  category: {
    type: Object,
    required: true,
    validator: isTransactionCategoryValid
  }
})

</script>

<template>
  <v-list-item
      :prepend-icon="category.icon"
      :title="category.name"
      @click="store.setEditCategory(category)"
  >
  </v-list-item>
</template>

<style scoped>

</style>
