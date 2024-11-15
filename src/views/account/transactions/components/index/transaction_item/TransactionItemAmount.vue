<script setup>

defineProps({
  fromAccount: {
    required: true,
    type: Object,
  },
  toAccount: {
    type: Object,
    default: () => ({})
  },
  isTypeTransfer: {
    required: true,
    type: Boolean,
  }
})


function compareAmountsWithoutSign(a, b) {
  return Math.abs(a) === Math.abs(b);
}
</script>

<template>

  <div class="d-flex">
    <div :class="{'text-green': fromAccount.isIncome}">
      {{ fromAccount.amountDisplay }}
    </div>
    <div
        v-if="isTypeTransfer && !compareAmountsWithoutSign(fromAccount.amount, toAccount.amount)"
    >
      <v-icon class="mx-1 text-grey-darken-1" icon="mdi-arrow-right-thin"/>
      <span class="text-green">{{ toAccount.amountDisplay }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>