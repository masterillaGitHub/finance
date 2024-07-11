<script setup>

import CategoryItem from "@/views/account/settings/categories/components/index/CategoryItem.vue";
import CategoryItemGroup from "@/views/account/settings/categories/components/index/CategoryItemGroup.vue";
import {validateTransactionCategoryItems} from "@/helpers/validators/entities.js";

defineProps({
  categories: {
    type: Array,
    default: () => [],
    validator: validateTransactionCategoryItems
  }
})
</script>

<template>
  <v-list>
    <template
        v-for="category in categories"
        :key="category.id"
    >
      <CategoryItemGroup
          v-if="category.isChildren()"
          :category="category"
      />

      <CategoryItem
          v-else
          :category="category"
      />
    </template>
  </v-list>
</template>

<style scoped>

</style>
