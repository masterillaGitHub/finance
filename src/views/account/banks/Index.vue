<script setup>
import {useRouter} from "vue-router";
import {useBankCreateStore} from "@/stores/accounts/bank.create.store.js";
import {computed, onMounted} from "vue";

const router = useRouter()
const bankCreateStore = useBankCreateStore()


const dividerElement = {type: 'divider', inset: true}
const subheaderElement = {type: 'subheader', title: 'Виберіть банк'}

const banks = computed(() => {
    const banks = bankCreateStore
        .getBanks
        .map(bank => ({
            id: bank.id,
            title: bank.name,
            prependAvatar: new URL('/assets/' + bank.image_url, import.meta.url).href
        }))
        .flatMap(bank => [bank, dividerElement])

    banks.unshift(subheaderElement)

    return banks
})
onMounted(() => bankCreateStore.loadBanks())

const selectBank = bankId => {
  bankCreateStore.bankId = bankId
  router.push({name: 'bank-accounts.create'})
}
</script>

<template>
  <v-card
      class="fill-height"
  >
    <v-toolbar color="cyan-lighten-1">
      <v-btn
          :to="{name: 'accounts.index'}"
          icon="mdi-arrow-left"
          variant="text"
      />

      <v-toolbar-title>Вибір банка</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-progress-linear
        indeterminate
        :active="bankCreateStore.bankLoading"
    />

    <v-list
        :items="banks"
        item-props
        lines="three"
    >
      <template #append="{item}">
        <v-btn
            text="Підключити"
            variant="text"
            @click="selectBank(item.id)"
        />
      </template>
    </v-list>
  </v-card>
</template>

<style scoped>

</style>
