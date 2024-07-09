<script setup>

import AccountGroupItem from "@/views/account/accounts/components/index/AccountCategoryItem.vue";
import {computed, onMounted, ref} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useIndexStore} from "@/stores/accounts/index.store.js";
import Account from "@/models_resources/models/Account.js";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {isEmpty} from "@/helpers/validators/index.js";

const indexStore = useIndexStore()
const categoriesIds = ref([])
const categories = computed(() => AccountCategory.findIn(indexStore.categoriesIds))
const accountsLoading = ref(false)

onMounted(async () => {
  await load()
})

async function load() {
  accountsLoading.value = true

  try {
    const response = await AccountCategory.loadMainPage()

    if (isEmpty(response.data.data)) {
      resetAccountCategories()
    }

    // TODO: потрібно було зняти реактивність тому що дублювались дані із викликом нового об'єкту з іншого компоненту
    indexStore.categoriesIds = [...response.data.data]
  }
  finally {
    accountsLoading.value = false
  }

}

function resetAccountCategories() {
  AccountCategory.reset()
  Account.reset()
  AccountSum.reset()
}
</script>

<template>
  <div>
    <div style="height: 4px">
      <v-fade-transition>
        <v-progress-linear
            v-show="accountsLoading"
            indeterminate
        />
      </v-fade-transition>
    </div>

    <v-fade-transition mode="out-in">
      <div v-if="categories.length">
        <v-expansion-panels
            multiple
            v-model="indexStore.accountsPanelModel"
        >
          <AccountGroupItem
              v-for="element in categories"
              :key="element.id"
              :category="element"
          />
        </v-expansion-panels>
      </div>
    </v-fade-transition>

  </div>

</template>

<style scoped>
</style>
