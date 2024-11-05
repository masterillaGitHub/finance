<script setup>

import {ref} from "vue";
import TheAccountsComponent
  from "@/views/account/bank_accounts/components/mono/templates/TheAccountsStep.vue";
import TheTokenStep from "@/views/account/bank_accounts/components/mono/templates/TheTokenStep.vue";
import TheFinishStep from "@/views/account/bank_accounts/components/mono/templates/TheFinishStep.vue";

const tokenComponentRef = ref()
const accountsComponentRef = ref()
const STEP_TOKEN = 1
const STEP_ACCOUNTS = 2
const STEP_DONE = 3

const steps = [STEP_TOKEN, STEP_ACCOUNTS, STEP_DONE]
const stepperModel = ref(1)



const nextStep = async next => {
  if (stepperModel.value === STEP_TOKEN && !await tokenComponentRef.value.formCheck()) {
      return
  }
  else if (stepperModel.value === STEP_ACCOUNTS && !await accountsComponentRef.value.formCheck()) {
    return
  }

  next()
}

</script>

<template>

  <v-stepper
      v-model="stepperModel"
  >
    <template v-slot:default="{ prev, next }">

      <v-stepper-header>
        <template v-for="step in steps" :key="step">
          <v-stepper-item
              :complete="stepperModel > step"
              :value="step"
          />

          <v-divider v-if="step < STEP_DONE"/>
        </template>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item
            :value="STEP_TOKEN"
        >
          <TheTokenStep ref="tokenComponentRef"/>
        </v-stepper-window-item>

        <v-stepper-window-item
            :value="STEP_ACCOUNTS"
        >
          <TheAccountsComponent ref="accountsComponentRef"/>
        </v-stepper-window-item>

        <v-stepper-window-item
            :value="STEP_DONE"
        >
          <TheFinishStep/>
        </v-stepper-window-item>
      </v-stepper-window>

      <v-stepper-actions
          v-if="stepperModel < STEP_DONE"
          prev-text="назад"
          next-text="далі"
          @click:next="nextStep(next)"
          @click:prev="prev"
      />
    </template>
  </v-stepper>
</template>

<style scoped>

</style>