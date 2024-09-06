<script setup>

import {computed, onMounted, ref} from "vue";
import {STEP_TAG} from "@/services/transaction/step_transition_service.js";
import {useFormStore} from "@/stores/transactions/form.store.js";
import TransactionTag from "@/models_resources/models/TransactionTag.js";


const formStore = useFormStore()
const emit = defineEmits([
  'done'
])

const tagsLoading = ref(false)
const tags = computed(() => TransactionTag.findLoaded())
const itemsText = computed(() => formStore.getTags.map(t => t.name).join(', '))

onMounted(initComponent)

async function initComponent() {
  await loadTags()
}

async function loadTags() {
  tagsLoading.value = true

  try {
    await TransactionTag.sync({
      'filter[user_id]': 'auth'
    })
  }
  finally {
    tagsLoading.value = false
  }
}

</script>

<template>

  <v-expansion-panel :value="STEP_TAG">
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default>
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Теги:</v-col>
          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <div v-if="formStore.getTags.length === 0" class="text-grey">Вкажіть теги</div>
              <div v-else-if="formStore.getTags.length <= 3" class="text-truncate">{{ itemsText }}</div>
              <div v-else>вибрано {{formStore.getTags.length}} тегів</div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="s-panel-text">

      <v-chip-group
          multiple
          column
          v-model="formStore.tagIds"
      >
        <v-chip
            v-for="teg in tags"
            :key="teg.id"
            label
            variant="text"
            :text="teg.name"
            :value="teg.id"
        />
      </v-chip-group>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>

.s-panel-text :deep(.v-expansion-panel-text__wrapper) {
  max-height: 200px;
  overflow: auto;
}
</style>
