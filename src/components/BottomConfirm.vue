<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
    'success',
    'cancel'
])
const sheets = defineModel()

function cancel() {
  sheets.value = false

  emit('cancel')
}
</script>

<template>
  <v-bottom-sheet v-model="sheets">
    <v-card
        :title="title"
        :text="text"
    >
      <v-card-actions>
        <v-btn
            text="Відміна"
            variant="plain"
            size="x-large"
            @click="cancel"
            color="primary"
        />
        <v-spacer/>
        <v-btn
            class="text-red"
            text="Ок"
            variant="tonal"
            size="x-large"
            @click="emit('success')"
        />
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<style scoped>

</style>
