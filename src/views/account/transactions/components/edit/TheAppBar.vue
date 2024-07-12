<script setup>
import {useShowStore} from "@/stores/accounts/show.store.js";
import BottomConfirm from "@/components/BottomConfirm.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const showStore = useShowStore()
const router = useRouter()
const emit = defineEmits([
    'removeTransaction'
])

const confirmModel = ref(false)

function removeAccount() {
  emit('removeTransaction')

  router.push({name: 'transactions.index'})
}

</script>

<template>
  <v-app-bar
      :elevation="2"
      density="compact"
  >
    <template v-slot:prepend>
      <v-btn
          icon="mdi-arrow-left"
          :to="{name: 'transactions.index'}"
      />
    </template>

    <v-spacer></v-spacer>

    <v-btn
        class="text-red"
        icon="mdi-delete-outline"
        size="large"
        variant="plain"
        @click="confirmModel = true"
    />
  </v-app-bar>

  <BottomConfirm
      v-model="confirmModel"
      title="Видалити?"

      @success="removeAccount"
  />
</template>

<style scoped>

</style>
