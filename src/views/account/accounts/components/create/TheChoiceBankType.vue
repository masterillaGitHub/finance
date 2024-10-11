<script setup>
import {useAddStore} from "@/stores/accounts/add.store.js";
import {BANK_TYPE_INPUT_ID_AUTO, BANK_TYPE_INPUT_ID_MANUAL} from "@/helpers/constants.js";

const addStore = useAddStore()
const emit = defineEmits({
  selectedBankTypeId: Number,
})

const types = [
  {
    id: BANK_TYPE_INPUT_ID_AUTO,
    title: 'Синхронізація із банком',
    icon: 'mdi-sync',
    description: 'Підключіть свій банк щоб отримувати транзакції автоматично'},
  {
    id: BANK_TYPE_INPUT_ID_MANUAL,
    title: 'Ручний ввід',
    icon: 'mdi-gesture-tap',
    description: 'Додавайте транзакції вручну'},
]

</script>

<template>
  <v-bottom-sheet v-model="addStore.isShowChoiceBankType">
    <v-list lines="three">
      <v-list-item
          v-for="type in types"
          :key="type.id"
          :prepend-icon="type.icon"
          :title="type.title"
          :subtitle="type.description"
          @click="emit('selectedBankTypeId', type.id)"
      />
    </v-list>
  </v-bottom-sheet>
</template>

<style scoped>

</style>