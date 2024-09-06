<script setup>

import CategoryItem from "@/views/account/settings/categories/components/index/CategoryItem.vue";
import CategoryItemGroup from "@/views/account/settings/categories/components/index/CategoryItemGroup.vue";
import {validateTransactionCategoryItems} from "@/helpers/validators/entities.js";
import DraggableComponent from "vuedraggable";
import {computed, ref} from "vue";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";

const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
    validator: validateTransactionCategoryItems
  }
})
const store = useSettingsCategoriesStore()

const categoriesModel = computed(() => props.categories)

const sortOrderUpdate = () => {
  store.setSorting(categoriesModel.value)
}
</script>

<template>
  <v-list>
    <DraggableComponent
        :list="categoriesModel"
        item-key="id"
        handle=".s-handle-sorting-setting-category-item"
        style="width: 100%"
        @update="sortOrderUpdate"
    >
      <template #item="{element}">
          <CategoryItemGroup
              v-if="element.isChildren()"
              :category="element"
          />

          <CategoryItem
              v-else
              :category="element"
          />
      </template>
    </DraggableComponent>
  </v-list>
</template>

<style scoped>

</style>
