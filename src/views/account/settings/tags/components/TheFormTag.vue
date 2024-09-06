<script setup>
import {computed, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import BottomConfirm from "@/components/BottomConfirm.vue";
import {useSettingsTagsStore} from "@/stores/settings/tags.store.js";

defineProps({
  title: {
    type: String,
    required: true,
  }
})

const store = useSettingsTagsStore()

const form = ref()
const isEdit = computed(() => !!tag.value.exists)
const confirmModel = ref(false)
const tag = computed(() => store.editTag)
const {check} = useFormValidate(form)

const nameRules = [required]


async function saveTag() {
  const valid = await check()

  if (!valid) {
    return
  }

  store.closeDialog()

  await store.saveTag(tag.value)
  await store.loadTags()
}

function removeTag() {
  store.closeDialog()
  tag.value.destroy()
}

</script>

<template>
  <v-card
      prepend-icon="mdi-credit-card-edit-outline"
      :title="title"
  >
    <v-card-text>
      <v-form @submit.prevent="saveTag" ref="form">

        <v-text-field
            label="Назва тегу"
            v-model="tag.name"
            :rules="nameRules"
            :autofocus="!isEdit"
        />

      </v-form>
      <BottomConfirm
          v-model="confirmModel"
          title="Видалити?"

          @success="removeTag"
      />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
          v-if="isEdit"
          class="text-red"
          icon="mdi-delete-outline"
          variant="plain"
          @click="confirmModel = true"
      />

      <v-spacer></v-spacer>

      <v-btn
          text="Відміна"
          size="large"
          variant="plain"
          @click="store.closeDialog()"
      />

      <v-btn
          size="large"
          color="primary"
          text="Зберегти"
          variant="tonal"
          @click="saveTag"
      />
    </v-card-actions>
  </v-card>
</template>

<style lang="postcss" scoped>

</style>
