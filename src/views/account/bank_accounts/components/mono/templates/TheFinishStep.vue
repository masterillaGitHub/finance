<script setup>

import {useBankCreateStore} from "@/stores/accounts/bank.create.store.js";
import {useCreateStore} from "@/views/account/bank_accounts/components/mono/store/create.store.js";
import {onMounted} from "vue";

const bankCreateStore = useBankCreateStore()
const createMonoStore = useCreateStore()

onMounted(async () => {
    await createMonoStore.saveAccounts(bankCreateStore.bankId)
})
</script>

<template>
  <v-card>
    <v-card-title>Монобанк підключено</v-card-title>
    <v-card-text>
      <ul>
        <li>Встановлюємо зв'язки</li>
        <li>Вантажимо історію транзакцій</li>
        <li>Визначаємо категорії платежів</li>
        <li>Оновлюємо графічки</li>
      </ul>
    </v-card-text>
    <v-card-actions class="justify-center mt-5">
      <v-btn
          :to="{name: 'accounts.index'}"
          variant="tonal"
          text="Готово"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>