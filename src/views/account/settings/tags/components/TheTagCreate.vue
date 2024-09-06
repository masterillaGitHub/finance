<script setup>

import DialogComponent from "@/components/DialogComponent.vue";
import TheFormTag from "@/views/account/settings/tags/components/TheFormTag.vue";
import {useSettingsTagsStore} from "@/stores/settings/tags.store.js";

const store = useSettingsTagsStore()

</script>

<template>

  <DialogComponent
      v-model="store.storeDialog"
  >
    <TheFormTag
      title="Новий тег"
    />
  </DialogComponent>
</template>

<style scoped>

</style>
