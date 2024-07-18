<script setup>
import TransactionItem from "@/views/account/transactions/components/index/TransactionItem.vue";
import {useRouter} from "vue-router";

defineProps({
  group: Object
})
const router = useRouter()


const select = transaction => {
  router.push({name: 'transactions.edit', params: {id: transaction.id}})
}
</script>

<template>
  <div class="s-group">
    <div class="text-grey my-3">{{group.date}}</div>
    <TransactionItem
        v-for="transaction in group.transactions"
        class="py-1"
        :t="transaction"
        v-ripple
        @click="select(transaction)"
    />
  </div>
</template>

<style scoped>

</style>
