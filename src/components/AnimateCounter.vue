<script setup>
import AutoCounter from 'vue3-autocounter';
import {computed, nextTick, ref, watch} from "vue";

const props = defineProps({
  counter: {
    type: Number,
    required: true,
  },
  suffix: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
  decimals: {
    type: Number,
    default: 0,
  }
})

const emit = defineEmits([
    'finished'
])

const counter = ref()
const beforeValue = ref(props.counter)
const currentValue = computed(() => props.counter)

watch(currentValue, async (value, oldValue) => {
  beforeValue.value = oldValue

  await nextTick()
  counter.value.start()
})
</script>

<template>

  <AutoCounter
      ref='counter'
      :startAmount='beforeValue'
      :endAmount='currentValue'
      :duration='1'
      :prefix=prefix
      :suffix=suffix
      separator=' '
      decimalSeparator=','
      :decimals=decimals
      :autoinit="false"
      @finished="emit('finished')"
  />
</template>

<style scoped>

</style>
