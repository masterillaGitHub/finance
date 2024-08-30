<script setup>

import {ref, watchEffect} from "vue";
import {useFormStore} from "@/stores/transactions/form.store.js";
import {subDays} from 'date-fns';
import {STEP_DATE} from "@/services/transaction/step_transition_service.js";

const formStore = useFormStore()
const emit = defineEmits([
  'done'
])

const selectedModel = ref()
const dialog = ref(false)
const dateModel = ref(formStore.date ?? new Date())
const titleDate = ref()

watchEffect(() => {
  selectedModel.value = formStore.getDate

  if (formStore.getDate === 'today') {
    titleDate.value = 'Сьогодні'
  }
  else if (formStore.getDate === 'yesterday') {
    titleDate.value =  'Вчора'
  }
  else if (formStore.getDate === 'tomorrow') {
    titleDate.value = 'Завтра'
  }
  else {
    selectedModel.value = 'custom'
    titleDate.value = formStore.getDate
  }
})

function setYesterday() {
  formStore.date = subDays(new Date(), 1)
  done()
}

function setToday() {
  formStore.date = new Date()
  done()
}

function setCustom() {
  dialog.value = true
}

function saveDate() {
  formStore.date = dateModel.value
  dialog.value = false
  done()
}

function done() {
  formStore.nextStep()
}

</script>

<template>

  <v-expansion-panel :value="STEP_DATE">
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
