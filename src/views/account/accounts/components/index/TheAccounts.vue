<script setup>

import AccountGroupItem from "@/views/account/accounts/components/index/AccountCategoryItem.vue";
import DraggableComponent from "vuedraggable";
import {computed, ref} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";

const categories = computed(() => AccountCategory.findLoaded())
const accountsLoading = ref(false)

async function load() {
  accountsLoading.value = true

  try {
    await AccountCategory.sync({
      include: 'accounts.sums'
      // include: 'accounts.sums.currency,accounts.currency'
    })
  }
  finally {
    accountsLoading.value = false
  }

}
</script>

<template>
  <div>
    <v-btn text="load" @click="load" class="mb-4"/>
<!--    <v-skeleton-loader type="article"></v-skeleton-loader>-->

    <v-progress-linear
        v-if="accountsLoading"
        indeterminate
    />
      <DraggableComponent
          v-model="categories"
          item-key="title"
          tag="v-expansion-panels"
          handle=".s-handle-sorting-account-group"
      >
        <template #item="{element}">
          <AccountGroupItem
              :category="element"
          />
        </template>
      </DraggableComponent>
  </div>

</template>

<style scoped>
</style>
