<script setup>

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import TheTransactions from "@/views/account/transactions/components/index/TheTransactions.vue";

const router = useRouter()
const isAddButton = ref(false)

onMounted(initComponent)

async function initComponent() {
  setTimeout(() => {
    isAddButton.value = true
  }, 1000)
}

router.beforeEach((to, from) => {
  isAddButton.value = false
})

</script>
<template>
<div
    class="pa-2"
>
  <TheTransactions/>

  <v-fab
      :active="isAddButton"
      icon="mdi-plus"
      :to="{name: 'transactions.create'}"
      app
      size="x-large"
      class="mb-15"
  />
</div>
</template>

<style scoped>
</style>
