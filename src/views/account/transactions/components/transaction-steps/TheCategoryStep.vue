<script setup>

import {ref} from "vue";

const emit = defineEmits([
  'done'
])
const isChildren = ref(false)
const selected = ref()
const parentItems = [
  'Подарунки дуже довга назва категорії',
  'Їжа та напої',
  'Зарплата',
  'Здоров\'я дуже довга назва категорії',
  'Оренда житла',
  'Розваги',
  'Зарплата',
  'Транспорт',
  'Інтернет',
  'Комунальні послуги',
  'Подорожі',
  'Зарплата',
  'Ремонт авто',
]

const items = [

  'Спорт і фітнес',
  'Зарплата',
  'Їжа та напої',
  'Освіта',
  'Розваги',
  'Здоров\'я',
  'Подарунки',
  'Транспорт',
  'Розваги',
  'Їжа та напої',
  'Зарплата',
  'Освіта',
  'Транспорт',
  'Інтернет',
  'Комунальні послуги',
  'Подорожі',
  'Зарплата',
  'Їжа та напої',
  'Подарунки',
  'Транспорт',
  'Зарплата',
  'Здоров\'я',
  'Освіта',
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
        v-slot:default="{expanded}"
    >
      <v-row no-gutters>
        <v-col class="d-flex justify-start" cols="4">Категорія:</v-col>

        <v-col class="text--secondary text-right" cols="8">
          <v-fade-transition leave-absolute>
            <div v-if="expanded" key="0" class="text-grey">Вкажіть категорію</div>
            <div v-else key="1" class="text-truncate">{{ selected }}</div>
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
                @click="isChildren = true"
            />
          </v-chip-group>
        </div>

        <div v-else>
          <div class="s-back-button-wrapper">
            <v-btn
                size="small"
                text="Назад"
                @click.stop="isChildren = false"
            />
          </div>

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
.s-back-button-wrapper {
  position: absolute;
  margin-top: -25px;
  z-index: 1;
  right: 10px;
}
</style>
