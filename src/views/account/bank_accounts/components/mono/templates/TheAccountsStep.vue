<script setup>

import {required} from "@/helpers/form_rules.js";
import {computed, onMounted, ref} from "vue";
import {useFormValidate} from "@/composables/form_validate.js";
import {useBankCreateStore} from "@/stores/accounts/bank.create.store.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";
import {useCreateStore} from "@/views/account/bank_accounts/components/mono/store/create.store.js";


const {toDecimal} = useCurrencyDecimalConvert()
const bankCreateStore = useBankCreateStore()
const monoCreateStore = useCreateStore()

const formAccountsRef = ref()
const bankAccountsLoading = ref(false)
const bankAccounts = computed(() => monoCreateStore.getAccounts.map(a => {
  return {
    id: a.id,
    label: JSON.stringify({...a})
  }
}))

const formAccountsValidate = useFormValidate(formAccountsRef)

onMounted(async () => {
  bankAccountsLoading.value = true

  try {
    await bankCreateStore.storeBankConnection()
    await monoCreateStore.loadAccountsByBankId(bankCreateStore.bankId)
  }
  finally {
    bankAccountsLoading.value = false
  }
})

const readLabelData = (data, name) => JSON.parse(data)[name] ?? ''

const availableBalanceLabel = data => readLabelData(data, 'availableBalance')
const balanceLabel = data => readLabelData(data, 'balance')
const maskedPanLabel = data => readLabelData(data, 'maskedPan')
const nameLabel = data => readLabelData(data, 'name')
const isCreditLabel = data => readLabelData(data, 'isCredit')

const formCheck = () => formAccountsValidate.check()

defineExpose({
  formCheck
})
</script>

<template>
  <v-form ref="formAccountsRef">
    <v-progress-linear :active="bankAccountsLoading" indeterminate/>
    <template
        v-for="(account, idx) in bankAccounts"
        :key="account.id"
        class="d-flex"
    >
      <v-checkbox
          multiple
          v-model="monoCreateStore.selectedAccountsIds"
          :value="account.id"
          :label="account.label"
          :rules="[required]"
          :hide-details="idx + 1 < bankAccounts.length"
          class="s-checkbox mb-4"
      >
        <template #label="{label}">
          <div class="d-flex w-100 justify-space-between">
            <div class="">
              <div>{{ nameLabel(label) }}</div>
              <div>{{ maskedPanLabel(label) }}</div>
            </div>
            <div class="text-right">
              <div>{{ balanceLabel(label) }}</div>
              <div v-if="isCreditLabel(label)" class="text-subtitle-2">
                Доступно: {{ availableBalanceLabel(label)}}
              </div>
            </div>
          </div>
        </template>
      </v-checkbox>
    </template>

  </v-form>
</template>

<style scoped>

.s-checkbox :deep(.v-label) {
  flex-grow: 1;
}

</style>