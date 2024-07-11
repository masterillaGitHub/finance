<script setup>
import ChoiceIcons from "@/components/ChoiceIcons.vue";

defineProps({
  iconSelect: {
    type: String,
    default: null,
  }
})
const emit = defineEmits({
  update: String,
})
const dialogModel = defineModel({
  type: Boolean,
  required: true,
})


const update = icon => {
  emit('update', icon)
  dialogModel.value = false
}

</script>

<template>
  <v-dialog
      v-model="dialogModel"
      scrollable
  >
    <v-card>
      <v-card-title>Оберіть іконку</v-card-title>

      <v-card-text class="s-card-text">
        <ChoiceIcons
          :icon-select="iconSelect"
          @update="update($event)"
        />

      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
            block
            text="Відміна"
            size="large"
            variant="plain"
            @click="dialogModel = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.s-card-text {
  padding: 15px !important;
}
</style>
