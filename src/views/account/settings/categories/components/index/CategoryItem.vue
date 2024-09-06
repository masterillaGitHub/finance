<script setup>

import {isTransactionCategoryValid} from "@/helpers/validators/entities.js";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";

const store = useSettingsCategoriesStore()

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
      :title="category.name"
      @click="store.setEditCategory(category)"
  >
    <template #prepend>
      <div class="s-handle-sorting-setting-category-item text-grey mr-3">
        <v-icon :icon="category.icon"/>
      </div>
    </template>
  </v-list-item>
</template>

<style scoped>

</style>
