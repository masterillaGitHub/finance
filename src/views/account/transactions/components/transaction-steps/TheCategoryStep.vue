<script setup>

import {computed, ref, watchEffect} from "vue";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const createStore = useCreateStore()
const showChildren = ref(false)
const categoryLoading = ref(false)
const parentCategoryModel = ref()
const categoryModel = ref()
const parentCategorySelected = ref(new TransactionCategory())

const categories = computed(() => TransactionCategory.findLoaded())

watchEffect(loadCategories)

async function loadCategories() {
  resetStep()
  categoryLoading.value = true

  try {
    await TransactionCategory.sync({
      include: 'children',
      'filter[type_id]': createStore.typeId
    })
  }
  finally {
    categoryLoading.value = false
  }
}

function selectParentCategory(category) {
  if (category.isChildren()) {
    showChildren.value = true
    parentCategorySelected.value = category

    return
  }

  setCategory(category.id)
  done()
}

function selectCategory(category) {
  setCategory(category.id)
  done()
}

function backToCategories() {
  showChildren.value = false
}

function resetStep() {
  parentCategoryModel.value = false
  categoryModel.value = false
  parentCategorySelected.value = new TransactionCategory()
  setCategory()
  showChildren.value = false
}

function setCategory(id = null) {
  createStore.categoryId = id
}

function done() {
  createStore.nextStep()
}
</script>

<template>

  <v-expansion-panel>
    <v-expansion-panel-title
        hide-actions
        v-slot:default="{expanded}"
    >
      <v-row no-gutters>
        <v-col class="d-flex justify-start" cols="4">Категорія:</v-col>

        <v-col class="text--secondary text-right" cols="8">
          <v-fade-transition leave-absolute>
            <div v-if="expanded" key="0" class="text-grey">Вкажіть категорію</div>
            <div v-else key="1" class="text-truncate">{{ createStore.getCategory.name }}</div>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="s-panel-text">
      <v-fade-transition mode="out-in">
        <v-progress-linear
            v-if="categoryLoading"
            indeterminate
        />
<!-- Category block - start -->
        <div v-else-if="!showChildren && !categoryLoading">
          <v-chip-group
              mandatory
              column
              v-model="parentCategoryModel"
          >
            <v-chip
                v-for="category in categories"
                :key="category.id"
                label
                variant="text"
                :text="category.name"
                :value="category.id"
                @click="selectParentCategory(category)"
            >
              <template v-if="category.isChildren()" v-slot:append>
                <v-badge
                    :content="category.childrenCount()"
                    inline
                    color="transparent"
                />
              </template>
            </v-chip>
          </v-chip-group>
        </div>
<!-- Category block - end -->

<!--        Subcategory block - start -->
        <div v-else>
          <div class="s-parent-wrapper">
            <div>
              <div class="text-grey text-subtitle-2">Батьківська категорія</div>
                <v-chip-group
                    mandatory
                    column
                    v-model="categoryModel"
                >
                  <v-chip
                      label
                      variant="text"
                      :text="parentCategorySelected.name"
                      :value="parentCategorySelected.id"
                      @click="selectCategory(parentCategorySelected)"
                  />
                </v-chip-group>
            </div>
            <v-btn
                icon="mdi-arrow-up-left"
                variant="text"
                @click.stop="backToCategories"
            />
          </div>

          <div class="text-grey text-subtitle-2">Підкатегорії</div>
          <v-chip-group
              mandatory
              column
              v-model="categoryModel"
          >
            <v-chip
                v-for="subcategory in parentCategorySelected.children"
                :key="subcategory.id"
                label
                variant="text"
                :text="subcategory.name"
                :value="subcategory.id"
                @click="selectCategory(subcategory)"
            />
          </v-chip-group>
        </div>
<!--        Subcategory block - end -->
      </v-fade-transition>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.s-panel-text :deep(.v-expansion-panel-text__wrapper) {
  max-height: 200px;
  overflow: auto;
}
.s-parent-wrapper {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
