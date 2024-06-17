<script setup>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import Account from "@/models_resources/models/Account.js";

const route = useRoute()

const account = computed(() => Account.find(route.params.id))

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

const avg = 34

</script>

<template>
  <v-card
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

    <v-card-text class="pt-0 text-center">
      <div class="text-h6 font-weight-light mb-2">
        {{ account.name }}
      </div>
      <div class="subheading font-weight-light text-grey">
        Поточний баланс
      </div>
      <div class="font-weight-bold">50 000 грн</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>

.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
