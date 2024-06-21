<script setup>

import {ref} from "vue";
import {useDate} from 'vuetify'

const emit = defineEmits([
  'done'
])
const date = useDate()

const selectedModel = ref('Сьогодні')
const titleDate = ref('Сьогодні')
const dialog = ref(false)
const dateModel = ref()

function setYesterday() {
  titleDate.value = 'Вчора'
  emit('done')
}

function setToday() {
  titleDate.value = 'Сьогодні'
  emit('done')
}

function setCustom() {
  dialog.value = true
}

function saveDate() {
  titleDate.value = date.format(new Date(dateModel.value), 'fullDate')
  selectedModel.value = 'Вибрати'
  dialog.value = false
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
          <v-col class="d-flex justify-start" cols="4">Дата:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <span v-show="titleDate">{{ titleDate }}</span>
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
        <v-chip label variant="text" text="Вчора" value="Вчора" @click="setYesterday"/>
        <v-chip label variant="text" text="Сьогодні" value="Сьогодні" @click="setToday"/>
        <v-chip label variant="text" text="Вибрати" value="Вибрати" @click="setCustom"/>

      </v-chip-group>
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
