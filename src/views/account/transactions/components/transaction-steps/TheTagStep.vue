<script setup>

import {computed, ref} from "vue";

const emit = defineEmits([
  'done'
])
const selected = ref([])
const itemsText = computed(() => selected.value.join(', '))

const items = [
  'Доходи',
  'Витрати',
  'Бюджет',
  'Заощадження',
  'Кредити',
  'Депозити',
  'Інвестиції',
  'Податки',
  'Зарплата',
  'Пенсія',
  'Страхування',
  'Платежі',
  'КомунальніПослуги',
  'Продукти',
  'Одяг',
  'Транспорт',
  'Розваги',
  'Медицина',
  'Освіта',
  'Подарунки'
]

</script>

<template>

  <v-expansion-panel >
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default>
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Теги:</v-col>
          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <div v-if="selected.length === 0" class="text-grey">Вкажіть теги</div>
              <div v-else-if="selected.length <= 3" class="text-truncate">{{ itemsText }}</div>
              <div v-else>вибрано {{selected.length}} тегів</div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="s-panel-text">

      <v-chip-group
          multiple
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
