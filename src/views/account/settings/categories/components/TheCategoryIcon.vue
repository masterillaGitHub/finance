<script setup>

import DialogChoiceIcons from "@/components/DialogChoiceIcons.vue";
import {ref} from "vue";

const icon = defineModel({
  type: String,
  required:true
})

const iconDialog = ref(false)

const update = iconName => {
  icon.value = iconName
}
</script>

<template>
  <div>
    <v-avatar
        size="x-large"
        :icon="icon"
        color="green"
        @click="iconDialog = true"
    />
    <DialogChoiceIcons
        v-model="iconDialog"
        @update="update"
    />
  </div>
</template>

<style scoped>

</style>
