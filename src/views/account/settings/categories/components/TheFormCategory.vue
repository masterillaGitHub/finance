<script setup>
import {computed, ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFormValidate} from "@/composables/form_validate.js";
import BottomConfirm from "@/components/BottomConfirm.vue";
import {useSettingsCategories} from "@/stores/settings/categories.store.js";

defineProps({
  title: {
    type: String,
    required: true,
  }
})

const store = useSettingsCategories()

const form = ref()
const withoutParentCategory = {name: 'Немає', id: null}
const isEdit = computed(() => !!category.value.exists)
const selectModel = computed({
  get: () => !!category.value.parent?.exists ? category.value.parent : withoutParentCategory,
  set: val => category.value.parent = val
})
const confirmModel = ref(false)
const category = computed(() => store.editCategory)
const parentCategories = computed(transformParentCategory)
const {check} = useFormValidate(form)

const nameRules = [required]

function transformParentCategory() {
  const res = store.categories
      .filter(c => c.type_id === store.currentTab)
      .filter(c => c.id !== category.value.id)
      .map(c => ({
        name: c.name,
        id: c.id
      }))

  res.unshift(withoutParentCategory)

  return res

}

async function saveCategory() {
  const valid = await check()

  if (!valid) {
    return
  }

  store.closeDialog()

  await store.saveCategory(category.value)
  await store.loadCategories()
}

function removeCategory() {
  store.closeDialog()
  category.value.destroy()
}

function change(val) {
  console.log('change' ,val)
  category.value.parent = val
}

</script>

<template>
  <v-card
      prepend-icon="mdi-credit-card-edit-outline"
      :title="title"
  >
    <v-card-text
    >
      <div class="text-center mb-4">
        <v-avatar size="x-large" icon="mdi-cash" color="green"/>
      </div>
      <v-form @submit.prevent="saveCategory" ref="form">

        <v-text-field
            label="Назва категорії"
            v-model="category.name"
            :rules="nameRules"
            :autofocus="!isEdit"
        />

        <v-select
            v-model="selectModel"
            label="Батьківська категорія"
            :items="parentCategories"
            item-title="name"
            item-value="id"
        ></v-select>

      </v-form>
      <BottomConfirm
          v-model="confirmModel"
          title="Видалити?"

          @success="removeCategory"
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
          @click="saveCategory"
      />
    </v-card-actions>
  </v-card>
</template>

<style lang="postcss" scoped>

</style>
