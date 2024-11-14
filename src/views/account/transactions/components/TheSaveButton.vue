<script setup>
import {useFormStore} from "@/stores/transactions/form.store.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {TRANSACTION_CATEGORY_ID_TRANSFER, TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {formatISO9075} from "date-fns";
import {useCreateStore} from "@/stores/transactions/create.store.js";


const formStore = useFormStore()
const createStore = useCreateStore()
const router = useRouter()
const saveLoading = ref(false)

async function add() {
  formStore.isEnabledValidate = true

  if (!formStore.isValid) {
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
  const typeId = formStore.typeId
  const date = formatISO9075(formStore.date)
  const tagsIds = formStore.tagIds // TODO: Check relation for collection

  const t = formStore.getTransaction

  t.category = formStore.typeId === TYPE_ID_TRANSFER
      ? TRANSACTION_CATEGORY_ID_TRANSFER
      : formStore.categoryId
  t.currency = formStore.currencyId
  t.type = typeId
  t.account = formStore.accountId
  t.setRelation('tags', tagsIds)
  t.amount = formStore.amount
  t.note = null
  t.transaction_at = date

  const tServerId = await t.save()

  if (formStore.typeId === TYPE_ID_TRANSFER) {
    const tt = await getTransferTransaction(t)

    tt.type = typeId
    tt.category = TRANSACTION_CATEGORY_ID_TRANSFER
    tt.account = formStore.toAccountId
    tt.currency = formStore.toCurrencyId
    tt.transfer_transaction = tServerId
    tt.amount = formStore.toAmount
    tt.setRelation('tags', tagsIds)
    tt.note = null
    tt.transaction_at = date

    await tt.save()
  }

}

const getTransferTransaction = async t => {
  if (t.transfer_transaction_id && !t.transfer_transaction) {
    formStore.transferTransactionId = await createStore.loadTransactionById(t.transfer_transaction_id)
  }

  return formStore.getTransferTransaction
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
