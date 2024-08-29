<script setup>
import {computed, ref} from "vue";
import AccountResource from "@/models_resources/resources/AccountResource.js";
import AnimateCounter from "@/components/AnimateCounter.vue";
import {useIndexStore} from "@/stores/accounts/index.store.js";
import {useCurrencyDecimalConvert} from "@/composables/currency_decimal_convert.js";

const indexStore = useIndexStore()
const {toDecimal} = useCurrencyDecimalConvert()

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

const loading = ref(false)
const amountTotal = computed(() => toDecimal(indexStore.amountTotal))

// TODO: поки що оновлення загальної суми відбувається через перерахунок всіх рахунків
// onMounted( loadBalanceTotal)

async function loadBalanceTotal() {
  loading.value = true

  try {
    const response = await AccountResource.balanceTotal()
    indexStore.amountTotal = response.data.data
  }
  finally {
    loading.value = false
  }
}

</script>

<template>
  <v-card
      class="mt-8 mx-auto overflow-visible"
      max-width="400"
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

    <v-card-text class="pt-0">
      <div class="subheading font-weight-light text-grey mb-2">
        Статок
      </div>
      <div class="text-h6 font-weight-light">
        <AnimateCounter
            :counter="amountTotal"
            suffix=" ₴"
        />

        <v-fade-transition>
          <v-progress-circular
              v-if="loading"
              indeterminate
              :size="20"
              :width="3"
              class="ml-4"
          />
        </v-fade-transition>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>

.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
