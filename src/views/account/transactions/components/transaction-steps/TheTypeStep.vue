<script setup>

import {computed, ref} from "vue";

const emit = defineEmits([
    'done'
])

const types = [
    'Витрата',
    'Дохід',
    'Переказ'
]

const type = computed(() => types[selectedType.value])

const selectedType = ref(0)

function selected(idx) {
  selectedType.value = idx
  emit('done')
}
</script>

<template>

  <v-expansion-panel >
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Тип:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <span v-if="expanded" key="0" class="text-grey">Вкажіть тип транзакції</span>
              <span v-else key="1">{{ type }}</span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <v-chip-group
          mandatory
          v-model="selectedType"

      >
        <v-chip
            v-for="(type, idx) in types"
            :key="idx"

            label
            variant="text"
            :text="type"
            :value="idx"
            @click="selected(idx)"
        />
      </v-chip-group>
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
