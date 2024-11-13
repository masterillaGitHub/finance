<script setup>
import {useFormStore} from "@/stores/transactions/form.store.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {TRANSACTION_CATEGORY_ID_TRANSFER, TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import {formatISO9075} from "date-fns";


const formStore = useFormStore()
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
  const date = formatISO9075(formStore.date)

  const t = formStore.getTransaction
  t.category = formStore.typeId === TYPE_ID_TRANSFER
      ? TRANSACTION_CATEGORY_ID_TRANSFER
      : formStore.categoryId
  t.currency = formStore.currencyId
  t.type = formStore.typeId
  t.account = formStore.accountId
  t.setRelation('tags', formStore.tagIds) // TODO: Check relation for collection
  t.amount = formStore.amount
  t.note = null
  t.transaction_at = date

  const tServerId = await t.save()

  if (formStore.typeId === TYPE_ID_TRANSFER) {
    const tt = formStore.getTransferTransaction
    tt.type = formStore.typeId
    tt.category = TRANSACTION_CATEGORY_ID_TRANSFER
    tt.account = formStore.toAccountId
    tt.currency = formStore.toCurrencyId
    tt.transfer_transaction = tServerId
    tt.amount = formStore.toAmount
    tt.setRelation('tags', formStore.tagIds) // TODO: Check relation for collection
    tt.note = null
    tt.transaction_at = date

    await tt.save()
  }

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
