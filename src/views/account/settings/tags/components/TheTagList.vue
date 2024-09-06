<script setup>

import TagItem from "@/views/account/settings/tags/components/TagItem.vue";
import DraggableComponent from "vuedraggable";
import {computed} from "vue";
import {useSettingsTagsStore} from "@/stores/settings/tags.store.js";

const store = useSettingsTagsStore()

const tagsModel = computed(() => store.tags)

const sortOrderUpdate = () => {
  store.setSorting(tagsModel.value)
}
</script>

<template>
  <div class="pa-2">
      <v-card :loading="store.tagsLoading">
        <v-fade-transition mode="out-in">
        <v-card-text v-if="tagsModel.length === 0 && !store.tagsLoading">
          Тегів немає
        </v-card-text>
        <v-list v-else>
          <DraggableComponent
              :list="tagsModel"
              item-key="id"
              handle=".s-handle-sorting-setting-tag-item"
              style="width: 100%"
              @update="sortOrderUpdate"
          >
            <template #item="{element}">
              <TagItem :tag="element"/>
            </template>
          </DraggableComponent>
        </v-list>
    </v-fade-transition>
      </v-card>
  </div>
</template>

<style scoped>

</style>
