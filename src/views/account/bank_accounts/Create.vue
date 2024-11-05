<script setup>
import {useBankCreateStore} from "@/stores/accounts/bank.create.store.js";
import {BANK_TEMPLATES} from "@/helpers/constants.js";
import MonoTemplate from "@/views/account/bank_accounts/components/mono/templates/Index.vue";
import {computed} from "vue";
const bankCreateStore = useBankCreateStore()

const templates = {
  mono: MonoTemplate
}
const selectedBankId = computed(() => bankCreateStore.bankId)
const getTemplate = computed(() => {
  const templateName = BANK_TEMPLATES.find(t => t.id === selectedBankId.value)?.template ?? ''

  return templates[templateName]
})
</script>

<template>
  <v-card
      class="fill-height"
  >
    <v-toolbar color="cyan-lighten-1">
      <v-btn
          :to="{name: 'banks.index'}"
          icon="mdi-arrow-left"
          variant="text"
      />

      <v-toolbar-title>Підключення</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <component :is="getTemplate" />
  </v-card>
</template>

<style scoped>

</style>
