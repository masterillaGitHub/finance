<script setup>

import {isTagValid} from "@/helpers/validators/entities.js";
import {useSettingsTagsStore} from "@/stores/settings/tags.store.js";

const store = useSettingsTagsStore()

defineProps({
  tag: {
    type: Object,
    required: true,
    validator: isTagValid
  }
})

</script>

<template>
  <v-list-item
      :title="tag.name"
      @click="store.setEditTag(tag)"
  >
    <template #prepend>
      <div class="s-handle-sorting-setting-tag-item text-grey mr-3">
        <v-icon icon="mdi-file-arrow-up-down-outline"/>
      </div>
    </template>
  </v-list-item>
</template>

<style scoped>

</style>
