<script setup>
import {ref} from "vue";

const emit = defineEmits([
  'done'
])
const isChildren = ref(false)
const selected = ref('Готівка')
const parentItems = [
    'Готівка',
    'Банк',
    'Інший актив',
    'Борг',
]
const items = [
    'Готівка',
    'Гаманець',
    'Monobank UAH, black',
    'Monobank UAH, white',
    'Приват Універсальна',
]

function done() {
  emit('done')
  isChildren.value = false
}
</script>

<template>

  <v-expansion-panel>
    <v-expansion-panel-title
        hide-actions
        v-slot="{ expanded }"
    >
      <v-row no-gutters>
        <v-col class="d-flex justify-start" cols="4">Рахунок:</v-col>

        <v-col class="text--secondary text-right" cols="8">
          <v-fade-transition leave-absolute>
            <div v-if="expanded" key="0" class="text-grey">Вкажіть рахунок</div>
            <div v-else key="1">{{ selected }}</div>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-expansion-panel-title>

    <v-expansion-panel-text class="s-panel-text">
      <v-fade-transition mode="out-in">

      <div v-if="!isChildren">

      <v-chip-group
          mandatory
          column
          v-model="selected"
      >
        <v-chip
            v-for="(item, idx) in parentItems"
            :key="idx"
            label
            variant="text"
            :text="item"
            :value="item"
            @click="isChildren = true"
        />
      </v-chip-group>
      </div>

      <div v-else>
        <v-btn
            size="small"
            class="s-back-button"
            text="Назад"
            @click.stop="isChildren = false"
        />
      <v-chip-group
          mandatory
          column
          v-model="selected"
      >
        <v-chip
            v-for="(item, idx) in items"
            :key="idx"
            label
            variant="text"
            :text="item"
            :value="item"
            @click="done"
        />
      </v-chip-group>
      </div>
      </v-fade-transition>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.s-panel-text :deep(.v-expansion-panel-text__wrapper) {
  max-height: 200px;
  overflow: auto;
}
.s-back-button {
  position: absolute;
  margin-top: -25px;
  z-index: 1;
}
</style>
