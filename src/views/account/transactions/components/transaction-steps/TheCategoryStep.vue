<script setup>

import {computed, ref, watchEffect} from "vue";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const emit = defineEmits([
  'done'
])
const createStore = useCreateStore()
const showChildren = ref(false)
const categoryModel = ref()
const categoryLoading = ref(false)
const selected = ref()
const subcategoryModel = ref()
const categorySelected = ref(new TransactionCategory())
const categoryFinished = ref(new TransactionCategory())

const categories = computed(() => TransactionCategory.findLoaded())

watchEffect(loadCategories)

async function loadCategories() {
  resetStep()
  categoryLoading.value = true

  try {
    await TransactionCategory.sync({
      include: 'children',
      'filter[type_id]': createStore.type?.id
    })
  }
  finally {
    categoryLoading.value = false
  }
}

function selectCategory(category) {
  if (category.isChildren()) {
    showChildren.value = true
    categorySelected.value = category

    return
  }

  categoryFinished.value = category
  done()
}

function selectSubcategory(subcategory) {
  categoryFinished.value = subcategory
  done()
}

function backToCategories() {
  showChildren.value = false
}

function resetStep() {
  categoryModel.value = false
  subcategoryModel.value = false
  categorySelected.value = new TransactionCategory()
  categoryFinished.value = new TransactionCategory()
  showChildren.value = false
}

function done() {
  createStore.category = categoryFinished.value
  emit('done')
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
            <div v-else key="1" class="text-truncate">{{ categoryFinished.name }}</div>
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
              v-model="categoryModel"
          >
            <v-chip
                v-for="category in categories"
                :key="category.id"
                label
                variant="text"
                :text="category.name"
                :value="category.id"
                @click="selectCategory(category)"
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
                    v-model="subcategoryModel"
                >
                  <v-chip
                      label
                      variant="text"
                      :text="categorySelected.name"
                      :value="categorySelected.id"
                      @click="selectSubcategory(categorySelected)"
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
              v-model="subcategoryModel"
          >
            <v-chip
                v-for="subcategory in categorySelected.children"
                :key="subcategory.id"
                label
                variant="text"
                :text="subcategory.name"
                :value="subcategory.id"
                @click="selectSubcategory(subcategory)"
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
