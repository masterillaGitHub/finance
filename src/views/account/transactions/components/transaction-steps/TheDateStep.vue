<script setup>

import {computed, ref} from "vue";
import {useDate} from 'vuetify'
import {useCreateStore} from "@/stores/transactions/create.store.js";
import { isToday, isYesterday, isTomorrow, subDays } from 'date-fns';

const createStore = useCreateStore()
const emit = defineEmits([
  'done'
])
const dateHandler = useDate()

const selectedModel = ref()
const dialog = ref(false)
const dateModel = ref(createStore.date)
const titleDate = computed(() => dayHandler(createStore.date))

function dayHandler(date) {
  if (isToday(date)) {
    selectedModel.value = 'today'
    return 'Сьогодні'
  }
  else if (isYesterday(date)) {
    selectedModel.value = 'yesterday'
    return 'Вчора'
  }
  else if (isTomorrow(date)) {
    selectedModel.value = 'custom'
    return 'Завтра'
  }

  selectedModel.value = 'custom'

  return dateHandler.format(date, 'fullDateWithWeekday')
}

function setYesterday() {
  createStore.date = subDays(new Date(), 1)
  done()
}

function setToday() {
  createStore.date = new Date()
  done()
}

function setCustom() {
  dialog.value = true
}

function saveDate() {
  createStore.date = dateModel.value
  dialog.value = false
  done()
}

function done() {
  createStore.nextStep()
}

</script>

<template>

  <v-expansion-panel >
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Дата:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <span>{{ titleDate }}</span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <v-dialog
          v-model="dialog"
          max-width="600"
      >

        <v-card>
            <v-date-picker
                v-model="dateModel"
                width="100%"
                color="primary"
            />

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                text="Відміна"
                variant="plain"
                @click="dialog = false"
            ></v-btn>

            <v-btn
                color="primary"
                text="Вибрати"
                variant="tonal"
                @click="saveDate"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-chip-group
          mandatory
          v-model="selectedModel"
      >
        <v-chip label variant="text" text="Вчора" value="yesterday" @click="setYesterday"/>
        <v-chip label variant="text" text="Сьогодні" value="today" @click="setToday"/>
        <v-chip label variant="text" text="Вибрати" value="custom" @click="setCustom"/>

      </v-chip-group>
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
