<script setup>

import {computed, nextTick} from "vue";
import {TRANSACTION_TYPES} from "@/helpers/constants.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";
import {STEP_TYPE} from "@/services/transaction/step_transition_service.js";

const createStore = useCreateStore()

const typeModel = computed({
  get: () => createStore.typeId,
  set: val => createStore.typeId = val
})

async function done() {
  createStore.categoryId = null
  createStore.accountTransferId = null

  /**
   * nextTick() need for set first typeModel in createStore and nextStep runs after
   */
  await nextTick()
  createStore.nextStep()
}

</script>

<template>

  <v-expansion-panel :value="STEP_TYPE">
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Тип:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <span v-if="expanded" key="0" class="text-grey">Вкажіть тип транзакції</span>
              <span v-else key="1">{{ createStore.getType.name }}</span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <v-chip-group
          mandatory
          v-model="typeModel"
      >
        <v-chip
            v-for="type in TRANSACTION_TYPES"
            :key="type.id"

            label
            variant="text"
            :text="type.name"
            :value="type.id"
            @click="done"
        />
      </v-chip-group>
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
