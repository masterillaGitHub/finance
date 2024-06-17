<script setup>
import {computed, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useModelsStore} from "@/models_resources/store_models/models.store.js";
import TheCurrenciesChoiceList from "@/views/account/accounts/components/TheAccountSums.vue";
import {account, sums} from '@/services/accounts/create.js'
import {STORAGE_NAME_ACCOUNT_CATEGORIES} from "@/helpers/constants.js";

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

const category = computed(() =>
    (new AccountCategory().storageIndex().find(props.categoryId))
)
const nameRules = [required]

async function createAccount() {
  const valid = await check()

  if (!valid) {
    return
  }

  if (isNotExistsCategory()) {
    category.value.copyToStorage(STORAGE_NAME_ACCOUNT_CATEGORIES)

    modelsStore.addActiveId(STORAGE_NAME_ACCOUNT_CATEGORIES, props.categoryId)
  }

  emit('accountSave')

  saveAccount().then(r => '')
}

async function saveAccount() {
  account.value.category = category.value.id
  account.value.currency = sums.value[0].currency.id

  const accountId = await account.value.save({
    include: 'sums'
  })

  await saveAccountSums(accountId)
}

async function saveAccountSums(accountId) {
  if (!accountId) {
    return
  }

  for (const accountSum of sums.value) {
    accountSum.account = accountId
    await accountSum.save({
      include: 'currency'
    })
  }

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
      <v-form
          ref="form"
          v-if="account"
      >

        <v-text-field
            autofocus
            label="Назва рахунку"
            v-model="account.name"
            :rules="nameRules"
        />

        <div class="s-card-text-block">
          <div>
            <div>Тип рахунку</div>
            <div>{{category.name}}</div>
          </div>
          <v-divider/>
        </div>
        <TheCurrenciesChoiceList />
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
          @click="createAccount"
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
