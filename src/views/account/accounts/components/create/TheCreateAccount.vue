<script setup>
import {onMounted, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import {useModelsStore} from "@/models_resources/store_models/models.store.js";
import TheCurrenciesChoiceList from "@/views/account/accounts/components/TheAccountSums.vue";
import {useCreateStore} from "@/stores/accounts/create.store.js";
import {useIndexStore} from "@/stores/accounts/index.store.js";

const emit = defineEmits([
    'accountSave',
    'dialogClose'
])
const modelsStore = useModelsStore()
const createStore = useCreateStore()
const indexStore = useIndexStore()

const form = ref()
const {check} = useFormValidate(form)

const nameRules = [required]

async function createAccount() {
  const valid = await check()

  if (!valid) {
    return
  }

  emit('accountSave')

  updateCategoriesIds()

  await createStore.saveAccount()
}

function updateCategoriesIds() {
  const categoryId = createStore.account.getRelation('category')

  indexStore.addCategoryId(categoryId)
}

function createdAccountSum(accountSum) {
  createStore.createAccountSum(accountSum)
}

</script>

<template>
  <v-card
      prepend-icon="mdi-credit-card-plus-outline"
      title="Додати рахунок"
  >
    <v-card-text>
      <div class="text-center mb-4">
        <v-avatar size="x-large" icon="mdi-cash" color="green"/>
      </div>
      <v-form
          ref="form"
          v-if="createStore.account"
      >

        <v-text-field
            autofocus
            label="Назва рахунку"
            v-model="createStore.account.name"
            :rules="nameRules"
        />

        <div class="s-card-text-block">
          <div>
            <div>Тип рахунку</div>
            <div>{{createStore.account.category.name}}</div>
          </div>
          <v-divider/>
        </div>
        <TheCurrenciesChoiceList
            :account-sums="createStore.sums"
            :is-create-first="true"
            @created-account-sum="createdAccountSum"
        />
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
