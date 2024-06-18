<script setup>
import {onMounted, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import TheCurrenciesChoiceList from "@/views/account/accounts/components/TheAccountSums.vue";
import {useCreateStore} from "@/stores/accounts/create.store.js";
import {useIndexStore} from "@/stores/accounts/index.store.js";
import Account from "@/models_resources/models/Account.js";
import {useRoute, useRouter} from "vue-router";
import {removeElementByObject} from "@/helpers/functions.js";
import ConfirmBottomComponent from "@/components/ConfirmBottomComponent.vue";

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
const account = ref(Account.find(route.params.id))
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
        <v-avatar size="x-large" icon="mdi-cash" color="green"/>
      </div>
      <v-form ref="form">

        <v-text-field
            autofocus
            label="Назва рахунку"
            v-model="account.name"
            :rules="nameRules"
        />

        <div class="s-card-text-block">
          <div>
            <div>Тип рахунку</div>
            <div>{{account.category.name}}</div>
          </div>
          <v-divider/>
        </div>
        <TheCurrenciesChoiceList
            :account-sums="accountSums"
            @created-account-sum="createdAccountSum"
        />
      </v-form>
      <ConfirmBottomComponent
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
          variant="plain"
          @click="confirmModel = true"
      />

      <v-spacer></v-spacer>

      <v-btn
          text="Відміна"
          variant="plain"
          @click="$emit('dialogClose')"
      />

      <v-btn
          color="primary"
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
