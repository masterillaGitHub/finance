<script setup>

import AccountItem from "@/views/account/accounts/components/index/AccountItem.vue";
import {toCurrencyUAH} from "@/helpers/functions.js";
import {computed} from "vue";
import {isAccountCategoryValid} from "@/helpers/validators/entities.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";

const props = defineProps({
  category: {
    type: Object,
    required: true,
    validator: isAccountCategoryValid
  }
})
const {toDecimal} = useCurrencyDecimalConvert()

const sum = computed(() =>
    toCurrencyUAH(
        toDecimal(props.category.getSumInMineCurrency()),
        {maximumFractionDigits: 0}
    )
)

</script>

<template>
  <v-expansion-panel>
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
            <span>{{ category.name }}</span>
          </div>
          <div
              :class="{'text-grey': expanded}"
          >
            <span>{{ sum }}</span>
          </div>
        </div>
      </template>
    </v-expansion-panel-title>

    <v-expansion-panel-text class="s-custom-expansion-panel-text">
      <v-list>
        <AccountItem
            v-for="element in category.accounts"
            :key="element.id"
            :account="element"
        />
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
