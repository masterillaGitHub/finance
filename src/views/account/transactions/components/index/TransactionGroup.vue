<script setup>
import TransactionItem from "@/views/account/transactions/components/index/TransactionItem.vue";

defineProps({
  group: Object
})
</script>

<template>
  <div>
    <div class="text-grey">{{group.date}}</div>
    <TransactionItem
        v-for="transaction in group.items"
        :t="transaction"
    />
  </div>
</template>

<style scoped>

</style>
