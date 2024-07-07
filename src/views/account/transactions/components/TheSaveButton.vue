<script setup>
import {useCreateStore} from "@/stores/transactions/create.store.js";
import Transaction from "@/models_resources/models/Transaction.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {TRANSACTION_CATEGORY_ID_TRANSFER, TYPE_ID_TRANSFER} from "@/helpers/constants.js";

const createStore = useCreateStore()
const router = useRouter()
const saveLoading = ref(false)

async function add() {
  createStore.isEnabledValidate = true

  if (!createStore.isValid) {
    return
  }

  saveLoading.value = true

  try {
    await saveTransaction()
    await router.push({name: 'transactions.index'})
  }
  finally {
    saveLoading.value = false
  }
}

async function saveTransaction() {
  const t = new Transaction()
  t.currency = createStore.currencyId
  t.type = createStore.typeId
  t.account = createStore.accountId
  t.category = createStore.categoryId
  t.amount = createStore.amount
  t.note = null
  t.transaction_at = createStore.date

  if (createStore.typeId === TYPE_ID_TRANSFER) {
    t.category = TRANSACTION_CATEGORY_ID_TRANSFER
    t.to_account = createStore.toAccountId
    t.to_currency = createStore.toCurrencyId
    t.to_amount = createStore.toAmount
  }

  await t.save()
}
</script>

<template>
  <div>
    <v-btn
        :loading="saveLoading"
        color="primary"
        rounded="t-0 b-xl"
        size="x-large"
        text="Continue"
        variant="flat"
        block
        @click="add"
    />
  </div>
</template>

<style scoped>

</style>
