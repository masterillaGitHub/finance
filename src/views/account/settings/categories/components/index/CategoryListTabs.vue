<script setup>

import CategoryList from "@/views/account/settings/categories/components/index/CategoryList.vue";
import {computed, ref} from "vue";
import {TYPE_ID_EXPENSE, TYPE_ID_INCOME} from "@/helpers/constants.js";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";

const store = useSettingsCategoriesStore()

const expenses = computed(() => store.categories.filter(c => c.type_id === TYPE_ID_EXPENSE))
const incomes = computed(() => store.categories.filter(c => c.type_id === TYPE_ID_INCOME))

</script>

<template>
  <div class="pa-2">
    <v-card :loading="store.categoryLoading">
      <v-tabs v-model="store.currentTab" grow>
        <v-tab :value="TYPE_ID_EXPENSE">Витрати</v-tab>
        <v-tab :value="TYPE_ID_INCOME">Доходи</v-tab>
      </v-tabs>
    </v-card>
  </div>
  <v-fade-transition>
    <v-card v-if="store.categories.length">
      <v-tabs-window v-model="store.currentTab">
        <v-tabs-window-item :value="TYPE_ID_EXPENSE">
          <CategoryList :categories="expenses"/>
        </v-tabs-window-item>
        <v-tabs-window-item :value="TYPE_ID_INCOME">
          <CategoryList :categories="incomes"/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-fade-transition>
</template>

<style scoped>

</style>
