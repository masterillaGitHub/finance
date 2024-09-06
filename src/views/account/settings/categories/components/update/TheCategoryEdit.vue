<script setup>

import DialogComponent from "@/components/DialogComponent.vue";
import TheFormCategory from "@/views/account/settings/categories/components/TheFormCategory.vue";
import {useSettingsCategoriesStore} from "@/stores/settings/categories.store.js";

const store = useSettingsCategoriesStore()

</script>

<template>

  <DialogComponent
      v-model="store.editDialog"
  >
    <TheFormCategory
      title="Редагування категорії"
    />
  </DialogComponent>
</template>

<style scoped>

</style>
