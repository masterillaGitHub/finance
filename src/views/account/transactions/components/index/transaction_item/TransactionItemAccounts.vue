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
</script>

<template>
  <div class="d-flex text-grey-darken-1" >
    <div
        class="d-flex s-min-width-0 "
        :class="[isTypeTransfer ? 's-max-width-70' : 'w-100']"
    >
      <v-icon :icon="fromAccount.icon" class="mr-2"/>
      <span class="text-truncate">{{ fromAccount.name }}</span>
    </div>
    <div v-if="isTypeTransfer" class="d-flex s-min-width-0 s-max-width-70">
      <v-icon icon="mdi-arrow-right-thin" class="mx-1"/>
      <v-icon :icon="toAccount.icon" class="mr-2"/>
      <span class="text-truncate">{{ toAccount.name}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>