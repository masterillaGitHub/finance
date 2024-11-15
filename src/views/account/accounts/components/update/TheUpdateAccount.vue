<script setup>
import {onMounted, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import TheCurrenciesChoiceList from "@/views/account/accounts/components/TheAccountSums.vue";
import {useCreateStore} from "@/stores/accounts/create.store.js";
import {useIndexStore} from "@/stores/accounts/index.store.js";
import Account from "@/models_resources/models/Account.js";
import {useRoute, useRouter} from "vue-router";
import BottomConfirm from "@/components/BottomConfirm.vue";
import TheCategoryIcon from "@/views/account/settings/categories/components/TheCategoryIcon.vue";
import {ACCOUNT_TYPE_INTERNAL, ACCOUNT_TYPES, TYPE_INPUT_MANUAL} from "@/helpers/constants.js";

const emit = defineEmits([
  'accountUpdate',
  'dialogClose'
])
const createStore = useCreateStore()
const route = useRoute()
const router = useRouter()
const {categoriesIds} = useIndexStore()

const form = ref()
const confirmModel = ref(false)
const accountTypeModel = ref()
const account = ref(Account.find(route.params.id))
const accountType = ref(ACCOUNT_TYPES.find(type => type.value === account.value.place_type).label)
const accountSums = ref(account.value.sums)
const {check} = useFormValidate(form)


const nameRules = [required]

onMounted(() => {
})

async function createAccount() {
  const valid = await check()

  if (!valid) {
    return
  }

  emit('accountUpdate')

  await saveAccountSums()
  await saveAccount()
}

async function saveAccount() {
  await account.value.save({
    include: 'category,sums.currency'
  })

}

async function saveAccountSums() {
  for (const accountSum of accountSums.value) {
    accountSum.account = account.value.id
    await accountSum.save({
      include: 'currency'
    })
  }
}

function deleteAccount() {
}

function removeAccount() {
  emit('dialogClose')

  account.value.destroy()

  router.push({name: 'accounts.index'})
}

function createdAccountSum(accountSum) {
  accountSums.value.push(accountSum)
}

</script>

<template>
  <v-card
      prepend-icon="mdi-credit-card-edit-outline"
      title="Редагування рахунку"
  >
    <v-card-text
        v-if="account"
    >
      <div class="text-center mb-4">
        <TheCategoryIcon v-model="account.icon"/>
      </div>
      <v-form ref="form">

        <v-text-field
            label="Назва рахунку"
            v-model="account.name"
            :rules="nameRules"
        />

        <div class="s-card-text-block">
          <div>
            <div>Категорія рахунку</div>
            <div>{{account.category.name}}</div>
          </div>
          <v-divider/>
        </div>

        <div class="s-card-text-block">
          <div>
            <div>Тип рахунку</div>
            <div>{{accountType}}</div>
          </div>
          <v-divider/>
        </div>
        <template v-if="account.place_type === ACCOUNT_TYPE_INTERNAL && account.input_type === TYPE_INPUT_MANUAL">
          <TheCurrenciesChoiceList
              :account-sums="accountSums"
              @created-account-sum="createdAccountSum"
          />
        </template>
      </v-form>
      <BottomConfirm
          v-model="confirmModel"
          title="Видалити?"

          @success="removeAccount"
      />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
          class="text-red"
          icon="mdi-delete-outline"
          size="large"
          variant="plain"
          @click="confirmModel = true"
      />

      <v-spacer></v-spacer>

      <v-btn
          text="Відміна"
          size="large"
          variant="plain"
          @click="$emit('dialogClose')"
      />

      <v-btn
          color="primary"
          size="large"
          text="Зберегти"
          variant="tonal"
          @click="createAccount"
      />
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
