<script setup>
import mdiIconList from "@/helpers/mdi-icon-list.js";

const props = defineProps({
  iconSelect: {
    type: String,
    default: null,
  }
})
const emit = defineEmits({
  update: String,
})

const isActive = icon => icon === props.iconSelect
</script>

<template>
<div>
  <div
      v-for="group in mdiIconList"
      :key="group.title"

      class="s-icons-wrapper"
  >

    <div class="text-subtitle-1">{{group.title}}</div>
    <div
        class="d-flex justify-space-evenly flex-wrap"
    >
      <v-btn
          :active="isActive(icon)"
          variant="text"
          v-for="icon in group.icons"
          :key="icon"

          class="ma-1"
          :icon="icon"
          @click="emit('update', icon)"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
.s-icons-wrapper:not(:last-child) {
  margin-bottom: 5px;
}
</style>
