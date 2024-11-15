<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {ACCOUNT_TYPE_INTERNAL} from "@/helpers/constants.js";
import {useShowStore} from "@/stores/accounts/show.store.js";
import TheAccountInfoBalance from "@/views/account/accounts/components/show/TheAccountInfoBalance.vue";

const route = useRoute()
const showStore = useShowStore()

const account = computed(() => showStore.getAccount)

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
  if (account.value.exists) {
    showStore.accountId = route.params.id
  }
  else {
    await showStore.loadAccount(route.params.id)

  }
}

</script>

<template>
  <div>

    <v-progress-linear v-if="showStore.accountLoading" indeterminate/>
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
        <TheAccountInfoBalance
            v-if="account.place_type === ACCOUNT_TYPE_INTERNAL"
            :account="account"
        />
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
