<script setup>

import AccountGroupItem from "@/views/account/accounts/components/index/AccountCategoryItem.vue";
import DraggableComponent from "vuedraggable";
import {computed, ref} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useIndexStore} from "@/stores/accounts/index.store.js";

const indexStore = useIndexStore()
const categoriesIds = ref([])
const categories = computed(() => AccountCategory.findIn(indexStore.categoriesIds))
const accountsLoading = ref(false)

async function load() {
  accountsLoading.value = true

  try {
    const response = await AccountCategory.loadMainPage()
    indexStore.categoriesIds = response.data.data
  }
  finally {
    accountsLoading.value = false
  }

}
</script>

<template>
  <div>
    <v-btn text="load" @click="load" class="mb-4"/>

    <v-progress-linear
        v-if="accountsLoading"
        indeterminate
    />

    <v-expansion-panels
        multiple
        v-model="indexStore.accountsPanelModel"
    >
      <DraggableComponent
          v-model="categories"
          item-key="name"
          handle=".s-handle-sorting-account-group"
          style="width: 100%"
      >
        <template #item="{element}">
          <AccountGroupItem
              :category="element"
          />
        </template>
      </DraggableComponent>
    </v-expansion-panels>
  </div>

</template>

<style scoped>
</style>
