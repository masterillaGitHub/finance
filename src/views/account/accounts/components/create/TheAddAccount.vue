<script setup>

import {ref} from "vue";
import {ACCOUNT_TYPE_BANK, ACCOUNT_TYPE_CASH, ACCOUNT_TYPE_DEBT, ACCOUNT_TYPE_OTHER} from "@/helpers/constants.js";
import TheCreateAccount from "@/views/account/accounts/components/create/TheCreateAccount.vue";
import TheDialog from "@/components/TheDialog.vue";


const dialog = ref(false)
const sheet = ref(false)
const items = [
  { icon: 'mdi-credit-card-outline', title: 'Банківський рахунок', account_type: ACCOUNT_TYPE_BANK },
  { icon: 'mdi-cash', title: 'Готівка', account_type: ACCOUNT_TYPE_CASH },
  { icon: 'mdi-cash-register', title: 'Іншій актив', account_type: ACCOUNT_TYPE_OTHER },
  { icon: 'mdi-account-cash-outline', title: 'Борг', account_type: ACCOUNT_TYPE_DEBT },
]
const selectedAccountType = ref()

function openDialog(accountType) {
  selectedAccountType.value = accountType
  dialog.value = true
}
function accountSave() {
  sheet.value = false
  dialog.value = false
}
</script>

<template>

  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ props }">
      <div class="text-center">

        <v-btn
            v-bind="props"
            variant="outlined">
          <v-icon icon="mdi-wallet-plus-outline"/>
        </v-btn>
      </div>
    </template>

    <v-card>
      <v-container>
        <v-row>
          <v-col
              v-for="item in items"
              cols="6"
          >
            <v-sheet
                v-ripple
                border
                rounded="lg"
                height="100"
                class="w-100 bg-grey-lighten-3"
                @click="openDialog(item.account_type)"
            >
              <div
                  class="d-flex flex-column align-center justify-center fill-height"
              >
                <v-icon class="mb-1" :icon="item.icon"/>
                <div class="text-center">{{item.title}}</div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-bottom-sheet>

  <TheDialog
    v-model="dialog"
  >
    <TheCreateAccount
        :account-type="selectedAccountType"
        @accountSave="accountSave"
        @dialogClose="dialog = false"
    />
  </TheDialog>
</template>

<style scoped>
</style>
