<script setup>
import FullscreenAppBar from "@/components/FullscreenAppBar.vue";
import TheTagList from "@/views/account/settings/tags/components/TheTagList.vue";
import TheTagEdit from "@/views/account/settings/tags/components/TheTagEdit.vue";
import {onMounted} from "vue";
import {useSettingsTagsStore} from "@/stores/settings/tags.store.js";
import TheTagCreate from "@/views/account/settings/tags/components/TheTagCreate.vue";

const store = useSettingsTagsStore()

onMounted(async () => {
  await store.loadTags()
})
</script>

<template>
<div class="">
  <FullscreenAppBar
      path-name="settings.index"
      title="Теги"
  >
    <v-btn
        icon="mdi-plus"
        @click="store.setNewTag()"
    />
  </FullscreenAppBar>
  <TheTagList/>
  <TheTagCreate/>
  <TheTagEdit/>

</div>
</template>

<style scoped>

</style>
