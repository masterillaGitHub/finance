<script setup>
import CategoryItem from "@/views/account/settings/categories/components/index/CategoryItem.vue";
import {isTransactionCategoryValid} from "@/helpers/validators/entities.js";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";
import DraggableComponent from "vuedraggable";
import {computed, ref} from "vue";

const store = useSettingsCategoriesStore()

const props = defineProps({
  category: {
    type: Object,
    required: true,
    validator: isTransactionCategoryValid
  }
})

const subCategories = computed(() => props.category.children)
const subCategoriesModel = ref(subCategories.value)

const sortOrderUpdate = () => {
  store.setSorting(subCategories.value)
}
</script>

<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item
          :prepend-icon="category.icon"
          @click="store.setEditCategory(category)"
      >

        <template #prepend>
          <div class="s-handle-sorting-setting-category-item text-grey mr-3">
            <v-icon :icon="category.icon"/>
          </div>
        </template>

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

    <DraggableComponent
        v-model="subCategoriesModel"
        item-key="id"
        handle=".s-handle-sorting-setting-category-item"
        style="width: 100%"
        @update="sortOrderUpdate"
    >
      <template #item="{element}">
        <CategoryItem
            :category="element"
        />
      </template>
    </DraggableComponent>
  </v-list-group>
</template>

<style scoped>

</style>
