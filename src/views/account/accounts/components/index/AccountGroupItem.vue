<script setup>

import AccountItem from "@/views/account/accounts/components/index/AccountItem.vue";
import {toCurrencyUAH} from "@/helpers/functions.js";
import DraggableComponent from "vuedraggable";
import {ref} from "vue";

defineProps({
  account: Object
})

const accountItems = ref([
  {icon: 'mdi-bank-circle', name: 'Monobank UAH, Black', sum: 4000},
  {icon: 'mdi-bank-circle-outline', name: 'Monobank UAH, White', sum: 200},
  {icon: 'mdi-bank-circle-outline', name: 'Приват. Універсальна', sum: 0},
  {icon: 'mdi-wallet-outline', name: 'Готівка', sum: -2500},
])

</script>

<template>
  <v-expansion-panel
  >
    <v-expansion-panel-title
        hide-actions
        class="s-panel-title"
    >
      <template v-slot:default="{ expanded }">
        <div class="d-flex w-100 justify-space-between align-center">
          <div class="s-handle-sorting-account-group">
              <span v-if="expanded" key="0">
                <v-icon icon="mdi-menu-down"/>
              </span>
            <span v-else key="1">
                <v-icon icon="mdi-menu-right"/>
              </span>
            <span>{{account.title}}</span>
          </div>
          <div
              :class="{'text-grey': expanded}"
          >
            <span>{{ toCurrencyUAH(account.sum, {minimumFractionDigits: 0})}}</span>
          </div>
        </div>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text class="s-custom-expansion-panel-text">
      <v-list>

        <DraggableComponent
            v-model="accountItems"
            item-key="name"
            handle=".s-handle-sorting-account-item"
        >
          <template #item="{element}">
              <AccountItem
                  :element="element"
              />
          </template>
        </DraggableComponent>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.s-custom-expansion-panel-text :deep(.v-expansion-panel-text__wrapper) {
  padding: 0;
}
.s-panel-title {
  padding-left: 8px;
}
</style>
