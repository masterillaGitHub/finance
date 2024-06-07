<script setup>
import {useSnackbarStore} from "@/stores/snackbar.store.js";
import {computed} from "vue";

const snackbarStore = useSnackbarStore()


const isShow = computed({
  get() {
    return snackbarStore.isShowing
  },
  set(val) {
    snackbarStore.showing = val
  }
})
const text = computed(() => snackbarStore.text)

function hide() {
  snackbarStore.showing = false
}
</script>

<template>

  <v-snackbar
      v-model="isShow"
      location="top"
      timeout="2000"
      timer
  >
    {{ text }}
    <template v-slot:actions>
      <v-btn
          variant="text"
          @click="hide"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>

</style>
