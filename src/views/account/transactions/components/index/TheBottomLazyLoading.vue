<script setup>

import {computed, watch} from "vue";
import {useAppStore} from "@/stores/app.store.js";

const props = defineProps({
  show: {
    type: Number,
    default: 100
  },
  load: {
    type: Number,
    default: 100
  },
  enable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
    'load'
])

const appStore = useAppStore()

const isShowLazyLoading = computed(() =>
    appStore.offsetTopPercent >= props.show && appStore.offsetTop > 0
)
const isLoadTransactions = computed(() =>
    isShowLazyLoading.value || (appStore.offsetTop > 0 && appStore.offsetTopPercent >= props.load)
)

watch(isLoadTransactions, value => {
  if (value === true && props.enable) {
    emit('load')
  }
})
</script>

<template>
<div v-if="isShowLazyLoading && enable" class="mt-8 h-3 text-center">
  <v-progress-circular indeterminate/>
</div>
</template>

<style scoped>

</style>
