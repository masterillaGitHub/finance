<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import Account from "@/models_resources/models/Account.js";
import {toCurrency, toCurrencyUAH} from "@/helpers/functions.js";

const route = useRoute()

const account = computed(() => Account.find(route.params.id))
const sums = computed(() => account.value.sums.filter(s => s.balance !== 0))
const sumsCount = computed(() => sums.value.length)
const accountLoading = ref(false)

onMounted(initComponent)

const labels = ref([
  'січ',
  'лют',
  'бер',
  'квіт',
  'трав',
  'черв',
  'лип',
  'сер',
])
const value = ref([
  200,
  675,
  410,
  390,
  310,
  460,
  250,
  240,
])

async function initComponent() {
  if (!account.value.exists) {
    accountLoading.value = true

    try {
      await Account.sync({
        include: 'category,sums.currency',
        'filter[id]': route.params.id
      })
    }
     finally {
      accountLoading.value = false
    }
  }
}

</script>

<template>
  <div>

    <v-progress-linear v-if="accountLoading" indeterminate/>
    <v-card
        v-if="account"
        class="mt-8 mx-auto overflow-visible"
        max-width="400"
        elevation="0"
    >

      <v-sheet
          class="v-sheet--offset mx-auto"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
          rounded="lg"
      >
        <v-sparkline
            auto-draw
            :labels="labels"
            :model-value="value"
            color="white"
            line-width="2"
            padding="16"
        >
          <template v-slot:label="item">
            {{ item.value }}.
          </template>
        </v-sparkline>
      </v-sheet>

      <v-card-title class="text-center">{{ account.name }}</v-card-title>
      <v-card-text class="pt-0">
        <div class="subheading font-weight-light text-grey text-center">
          Поточний баланс<span v-if="sumsCount > 1">, в {{sumsCount}} валютах</span>
        </div>
        <div class="font-weight-bold text-center">{{ toCurrencyUAH(account.getSumInMineCurrency()) }}</div>

        <v-list v-if="sumsCount > 1">
          <v-list-item
            v-for="sum in sums"
            :key="sum.id"
            prepend-icon="mdi-flag-outline"
            class="s-list-item"
          >
            <template v-slot:title>
              <div class="d-flex justify-space-between">
                <div>{{ sum.currency.name}}</div>
                <div>{{ toCurrency(sum.balance, sum.currency.alphabetic_code)}}</div>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>

.v-sheet--offset {
  top: -24px;
  position: relative;
}

.s-list-item :deep(.v-list-item__spacer) {
  width: 10px;
}
</style>
