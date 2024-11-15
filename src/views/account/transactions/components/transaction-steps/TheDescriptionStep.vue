<script setup>

import {useFormStore} from "@/stores/transactions/form.store.js";
import {STEP_DESCRIPTION} from "@/services/transaction/step_transition_service.js";

const formStore = useFormStore()

</script>

<template>

  <v-expansion-panel :value="STEP_DESCRIPTION">
    <v-expansion-panel-title
        hide-actions
    >
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">Опис:</v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <div v-if="expanded" key="0" class="text-grey">Вкажіть опис транзакції</div>
              <div v-else key="1" class="text-truncate">{{ formStore.description }}</div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text>

      <v-text-field
          autofocus
          label="Опис"
          v-model="formStore.description"
      />
    </v-expansion-panel-text>

  </v-expansion-panel>
</template>

<style scoped>

</style>
