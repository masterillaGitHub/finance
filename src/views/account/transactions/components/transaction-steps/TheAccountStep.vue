<script setup>
import {computed, onUnmounted, ref} from "vue";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import {useFormStore} from "@/stores/transactions/form.store.js";
import Account from "@/models_resources/models/Account.js";
import {TYPE_ID_INCOME} from "@/helpers/constants.js";
import {STEP_ACCOUNT} from "@/services/transaction/step_transition_service.js";

const props = defineProps({
  account: {
    type: Object,
    default: new Account(),
    validator: i => i instanceof Account
  },
  isValid: {
    type: Boolean,
    required: true,
  },
  isTransfer: {
    type: Boolean,
    default: false
  },
  stepName: {
    type: String,
    default: STEP_ACCOUNT,
  }
})

const formStore = useFormStore()
const accountModel = defineModel()
const transactionTypeId = computed(() => formStore.typeId)

onUnmounted(() => {
  if (props.isTransfer) {
    accountModel.value = null
  }
})

const isChildren = ref(false)
const categories = computed(() => AccountCategory.findLoaded())
const categoryModel = ref(null)

const categorySelected = ref(new AccountCategory())

function selectCategory(category) {
  categorySelected.value = category
  isChildren.value = true
}

function backToCategories() {
  isChildren.value = false
}

</script>

<template>

  <v-expansion-panel :value="stepName">
    <v-expansion-panel-title disable-icon-rotate>
      <template v-slot:default="{expanded}">
        <v-row no-gutters>
          <v-col cols="4">
            <v-fade-transition leave-absolute>
              <span v-if="formStore.typeId === TYPE_ID_INCOME || !!isTransfer">На рахунок:</span>
              <span v-else>З рахунку:</span>
            </v-fade-transition>
          </v-col>

          <v-col class="text--secondary text-right" cols="8">
            <v-fade-transition leave-absolute>
              <div v-if="account.id" class="text-truncate">
                <v-icon :icon="account.icon"/> {{ account.name }}
              </div>
              <div class="text-grey">Вкажіть рахунок</div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
      <template v-slot:actions>
        <div class="ml-1">
          <v-icon v-if="!isValid" color="error" icon="mdi-alert-circle"/>
        </div>
      </template>
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
              :prepend-icon="category.icon"
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
            :prepend-icon="account.icon"
            :text="account.name"
            :value="account.id"
            @click="formStore.nextStep()"
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
