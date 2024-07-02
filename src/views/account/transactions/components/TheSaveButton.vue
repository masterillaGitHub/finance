<script setup>
import {useCreateStore} from "@/stores/transactions/create.store.js";
import Transaction from "@/models_resources/models/Transaction.js";

const createStore = useCreateStore()

function push() {
  createStore.validate = true

  console.log('valid', createStore.isValid)
  if (!createStore.isValid) {
    return
  }

  saveTransaction()
}

function saveTransaction() {
  const t = new Transaction()
  t.currency = createStore.currencyId
  t.type = createStore.typeId
  t.account = createStore.accountId
  // t.account_transfer_id = createStore.accountId
  t.category = createStore.categoryId
  t.amount = createStore.amount
  t.note = null
  t.transaction_at = createStore.date
  t.save()
}
</script>

<template>
  <div>
    <v-btn
        color="primary"
        rounded="t-0 b-xl"
        size="x-large"
        text="Continue"
        variant="flat"
        block
        @click="push"
    />
  </div>
</template>

<style scoped>

</style>
