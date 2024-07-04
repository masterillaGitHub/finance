<script setup>
import TransactionItem from "@/views/account/transactions/components/index/TransactionItem.vue";

defineProps({
  group: Object
})
</script>

<template>
  <div class="s-group">
    <div class="text-grey my-3">{{group.date}}</div>
    <TransactionItem
        v-for="transaction in group.transactions"
        class="s-transaction my-3"
        :t="transaction"
    />
  </div>
</template>

<style scoped>

</style>
