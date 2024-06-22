<script setup>

import {isNumber} from "@/helpers/validators/index.js";
import Calculator from "@/components/Calculator.vue";

defineProps({
  startSum: {
    type: [String, Number],
    default: 0
  }
})
const emit = defineEmits({
  done: isNumber
})
const showModel = defineModel({
  type: Boolean,
  required:true ,
})

const done = result => {
  showModel.value = false
  emit('done', result)
}
</script>

<template>
  <v-bottom-sheet
      v-model="showModel"
      class="s-bottom-sheet"
      content-class="s-content"
  >
    <Calculator
        :value="startSum"
        @on-result="done($event)"
    />
  </v-bottom-sheet>
</template>

<style>
.s-bottom-sheet > .s-content {

  border-radius: 10px !important;
  width: 345px !important;
  margin: 0 auto 25px !important;
}
</style>
