<script setup>

import {computed, ref, watchEffect} from "vue";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useFormStore} from "@/stores/transactions/form.store.js";
import {STEP_CATEGORY} from "@/services/transaction/step_transition_service.js";
import {isNull} from "@/helpers/validators/index.js";

const formStore = useFormStore()
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
      'filter[type_id]': formStore.typeId,
      'filter[user_id]': 'auth',
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
  if (isNull(formStore.transactionId)) {
    setCategory()
  }

  parentCategoryModel.value = false
  categoryModel.value = false
  parentCategorySelected.value = new TransactionCategory()
  showChildren.value = false
}

function setCategory(id = null) {
  formStore.categoryId = id
}

function done() {
  formStore.nextStep()
}
</script>

<template>

  <v-expansion-panel :value="STEP_CATEGORY">
    <v-expansion-panel-title>

      <template v-slot:default="{expanded}">
        <v-row no-gutters>
          <v-col cols="4">
            <v-fade-transition leave-absolute>
              <span v-if="formStore.typeId === 1">На категорію:</span>
              <span v-else>З категорії:</span>
            </v-fade-transition>
          </v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <div v-if="expanded" key="0" class="text-grey">Вкажіть категорію</div>
              <div v-else key="1">
                <span v-if="formStore.getCategory.id" class="text-truncate">
                  <v-icon :icon="formStore.getCategory.icon"/> {{ formStore.getCategory.name }}
                </span>
              </div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
      <template v-slot:actions>
        <div class="ml-1">
          <v-icon v-if="!formStore.isCategoryValid" color="error" icon="mdi-alert-circle"/>
        </div>
      </template>
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
                :prepend-icon="category.icon"
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
