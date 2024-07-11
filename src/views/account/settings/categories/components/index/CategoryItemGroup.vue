<script setup>
import CategoryItem from "@/views/account/settings/categories/components/index/CategoryItem.vue";
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
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item
          :prepend-icon="category.icon"
          @click="store.setEditCategory(category)"
      >
        <v-list-item-title>
          <span>{{category.name}}</span>
          <v-badge
              :content="category.childrenCount()"
              inline
              color="transparent"
          />
        </v-list-item-title>

        <template v-slot:append="{isActive}">
          <v-btn
              v-bind="props"
              :icon="isActive ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </template>

    <CategoryItem
        v-for="child in category.children"
        :key="child.id"

        :category="child"
    />
  </v-list-group>
</template>

<style scoped>

</style>
