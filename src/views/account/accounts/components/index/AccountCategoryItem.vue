<script setup>

import AccountItem from "@/views/account/accounts/components/index/AccountItem.vue";
import DraggableComponent from "vuedraggable";
import {ACCOUNT_TYPES} from "@/helpers/constants.js";
import {toCurrencyUAH} from "@/helpers/functions.js";

const props = defineProps({
  category: Object
})

function getIcon() {
  return ACCOUNT_TYPES.find(type => type.account_type === props.category.name)?.icon ?? null
}

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
            <span>{{category.name}}</span>
          </div>
          <div
              :class="{'text-grey': expanded}"
          >
            <span>{{ toCurrencyUAH(category.getSum(), {minimumFractionDigits: 0})}}</span>
          </div>
        </div>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text class="s-custom-expansion-panel-text">
      <v-list>
        <DraggableComponent
            v-model="category.accounts"
            item-key="name"
            handle=".s-handle-sorting-account-item"
        >
          <template #item="{element}">
              <AccountItem
                  :account="element"
                  :icon="getIcon()"
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
