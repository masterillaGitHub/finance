<script setup>

import AccountGroupItem from "@/views/account/accounts/components/index/AccountGroupItem.vue";
import DraggableComponent from "vuedraggable";
import {ref} from "vue";

const accounts = ref([
  {title: 'Готівка', sum: 30000},
  {title: 'Банківські рахунки', sum: 120},
  {title: 'Борги', sum: 100},
  {title: 'Інші активи', sum: 456000},
])

</script>

<template>

    <DraggableComponent
        v-model="accounts"
        item-key="title"
        tag="v-expansion-panels"
        handle=".s-handle-sorting-account-group"
    >
      <template #item="{element}">
        <AccountGroupItem
            :account="element"
        />
      </template>
    </DraggableComponent>
</template>

<style scoped>
</style>
