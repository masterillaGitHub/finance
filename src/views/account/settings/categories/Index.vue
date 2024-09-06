<script setup>
import FullscreenAppBar from "@/components/FullscreenAppBar.vue";
import CategoryListTabs from "@/views/account/settings/categories/components/index/CategoryListTabs.vue";
import TheCategoryEdit from "@/views/account/settings/categories/components/update/TheCategoryEdit.vue";
import {onMounted} from "vue";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";
import TheCategoryCreate from "@/views/account/settings/categories/components/create/TheCategoryCreate.vue";

const store = useSettingsCategoriesStore()

onMounted(async () => {
  await store.loadCategories()
})
</script>

<template>
<div class="">
  <FullscreenAppBar
      path-name="settings.index"
      title="Категорії"
  >
    <v-btn
        icon="mdi-plus"
        @click="store.setNewCategory()"
    />
  </FullscreenAppBar>
  <CategoryListTabs/>
  <TheCategoryCreate/>
  <TheCategoryEdit/>

</div>
</template>

<style scoped>

</style>
