<script setup>
import {useCreateStore} from "@/stores/transactions/create.store.js";

const createStore = useCreateStore()

function push() {
  createStore.validate = true

  console.log('valid', createStore.isValid)
}
</script>

<template>
  <div>
    <v-btn
        color="primary"
        rounded="t-0 b-xl"
        size="x-large"
        text="Continue"
        variant="flat"
        block
        @click="push"
    />
  </div>
</template>

<style scoped>

</style>
