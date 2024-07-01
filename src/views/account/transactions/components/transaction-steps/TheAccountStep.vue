<script setup>
import {computed, onMounted, ref} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import Account from "@/models_resources/models/Account.js";
import {useCreateStore} from "@/stores/transactions/create.store.js";

const emit = defineEmits([
  'done'
])
const createStore = useCreateStore()
const isChildren = ref(false)
const categories = computed(() => AccountCategory.findLoaded())
const categoryModel = ref()
const accountModel = ref()
const categorySelected = ref(new AccountCategory())
const accountSelected = ref(new Account())

onMounted(async () => {
  await AccountCategory.sync({
    include: 'accounts'
  })
})

function selectCategory(category) {
  categorySelected.value = category
  isChildren.value = true
}

function selectAccount(account) {
  accountSelected.value = account
  done()
}

function backToCategories() {
  isChildren.value = false
}

function resetStep() {
  categoryModel.value = false
  accountModel.value = false
  categorySelected.value = new AccountCategory()
  accountSelected.value = new Account()
}

function done() {
  createStore.account = accountSelected.value
  emit('done')
  isChildren.value = false
}
</script>

<template>

  <v-expansion-panel>
    <v-expansion-panel-title
        hide-actions
        v-slot="{ expanded }"
    >
      <v-row no-gutters>
        <v-col class="d-flex justify-start" cols="4">Рахунок:</v-col>

        <v-col class="text--secondary text-right" cols="8">
          <v-fade-transition leave-absolute>
            <div v-if="expanded" key="0" class="text-grey">Вкажіть рахунок</div>
            <div v-else key="1">{{ accountSelected.name }}</div>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-expansion-panel-title>

    <v-expansion-panel-text class="s-panel-text">
      <v-fade-transition mode="out-in">

      <div v-if="!isChildren">

        <v-chip-group
            mandatory
            column
            v-model="categoryModel"
        >
          <v-chip
              v-for="category in categories"
              :key="category.id"
              label
              variant="text"
              :text="category.name"
              :value="category.id"
              @click="selectCategory(category)"
          />
        </v-chip-group>
      </div>

      <div v-else>
        <div class="s-back-button-wrapper">
          <v-btn
              size="small"
              text="Назад"
              @click.stop="backToCategories"
          />
        </div>
      <v-chip-group
          mandatory
          column
          v-model="accountModel"
      >
        <v-chip
            v-for="account in categorySelected.accounts"
            :key="account.id"
            label
            variant="text"
            :text="account.name"
            :value="account.id"
            @click="selectAccount(account)"
        />
      </v-chip-group>
      </div>
      </v-fade-transition>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.s-panel-text :deep(.v-expansion-panel-text__wrapper) {
  max-height: 200px;
  overflow: auto;
}

.s-back-button-wrapper {
  position: absolute;
  margin-top: -20px;
  z-index: 1;
  right: 10px;
}
</style>
