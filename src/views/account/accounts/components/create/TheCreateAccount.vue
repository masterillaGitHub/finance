<script setup>
import {computed, onMounted, ref} from "vue";
import Currency from "@/models_resources/models/Currency.js";
import Account from "@/models_resources/models/Account.js";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {requiredRule} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {STORAGE_NAME_ACCOUNT_CATEGORIES} from "@/helpers/constants.js";
import {useModelsStore} from "@/models_resources/store_models/models.store.js";

const emit = defineEmits([
    'accountSave',
    'dialogClose'
])
const props = defineProps({
  categoryId: Number
})
const modelsStore = useModelsStore()

const form = ref()
const {check} = useFormValidate(form)

const currencyModel = ref('Гривня')
const balanceModel = ref()
const nameModel = ref()
const currencyLoading = ref(false)
const accountSum = ref(new AccountSum())
const category = computed(() =>
    (new AccountCategory().storageIndex().find(props.categoryId))
)
const currencies = computed(() => Currency.findLoaded())
const currencySelected = computed(() => currencies.value.find(c => c.id === currencyModel.value))

const nameRules = [requiredRule]
const balanceRules = [requiredRule]


onMounted(async () => {

  if (!currencies.value.length) {
    await loadCurrencies()
  }

  currencyModel.value = 1

})

async function loadCurrencies() {

  currencyLoading.value = true

  try {
    await Currency.sync()
  } finally {
    currencyLoading.value = false
  }
}

function selectSubtitle(currency) {
  return currency.symbol + ' ' + currency.alphabetic_code
}

async function saveAccount() {
  const valid = await check()

  if (!valid) {
    return
  }

  if (isNotExistsCategory()) {
    category.value.copyToStorage(STORAGE_NAME_ACCOUNT_CATEGORIES)

    modelsStore.addLoadedId('account_categories', props.categoryId)
  }

  const account = new Account()
  account.name = nameModel.value
  account.category = category.value.id
  account.currency = currencyModel.value
  account.save({
    include: 'sums'
  })
    .then((accountId) => {
      if (accountId) {
        saveAccountSum(accountId)
      }
    })

  emit('accountSave')
}

function saveAccountSum(accountId) {
  const sum = new AccountSum()
  sum.balance = balanceModel.value
  sum.currency = currencyModel.value
  sum.account = accountId
  sum.save()

}

function isNotExistsCategory() {
  return !AccountCategory.find(props.categoryId)
}
</script>

<template>
  <v-card
      prepend-icon="mdi-wallet-plus-outline"
      title="Додати рахунок"
  >
    <v-card-text>
      <div class="text-center mb-4">
        <v-avatar size="x-large" icon="mdi-cash" color="green"/>
      </div>
      <v-form ref="form">

        <v-text-field
            label="Назва рахунку"
            v-model="nameModel"
            :rules="nameRules"
        />

        <div class="s-card-text-block">
          <div>
            <div>Тип рахунку</div>
            <div>{{category.name}}</div>
          </div>
          <v-divider/>
          <div>
            <div>Валюта</div>
            <div>
              <v-select
                  v-model="currencyModel"
                  :loading="currencyLoading"
                  :items="currencies"
                  item-value="id"
                  item-title="name"
                  variant="underlined"
              >
                <template v-slot:item="{ props, item }">
                  <v-list-item v-bind="props" :title="item.title" :subtitle="selectSubtitle(item.raw)"/>
                </template>
              </v-select>
            </div>
          </div>
          <v-divider/>
          <div>
            <div>Баланс</div>
            <div>
              <v-text-field
                  v-model="balanceModel"
                  :rules="balanceRules"
                  density="compact"
                  width="100"
                  variant="underlined"
              >
                <template v-slot:append-inner>
                  <span v-if="currencySelected">{{ currencySelected?.symbol}}</span>
                </template>
              </v-text-field>
            </div>
          </div>
          <v-divider/>
        </div>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
          text="Відміна"
          variant="plain"
          @click="$emit('dialogClose')"
      ></v-btn>

      <v-btn
          color="primary"
          text="Зберегти"
          variant="tonal"
          @click="saveAccount"
      ></v-btn>
    </v-card-actions>
  </v-card>

</template>

<style lang="postcss" scoped>

.s-card-text-block {
  margin-left: -24px;
  width: calc(100% + 47px);

  > div {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }
}
</style>
