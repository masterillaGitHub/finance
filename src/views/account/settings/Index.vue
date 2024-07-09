<script setup>

import {isNotEmpty} from "@/helpers/validators/index.js";
import {useRouter} from "vue-router";

const router = useRouter()

const settings = [
  {icon: 'mdi-account-outline', title: 'Профіль', path: 'settings.profile'},
  {icon: 'mdi-format-list-bulleted-type', title: 'Категорії', path: 'settings.categories'},
]

const click = setting => {
  if (isNotEmpty(setting.path)) {
    router.push({name: setting.path})
  }
}
</script>

<template>
<div class="pa-2">
  <v-list >
    <v-list-subheader>Загальні</v-list-subheader>

    <v-list-item
        v-for="setting in settings"
        :key="setting.title"
        :value="setting.title"
        @click="click(setting)"
    >
      <template v-slot:prepend>
        <v-icon :icon="setting.icon"/>
      </template>

      <v-list-item-title v-text="setting.title"/>

      <template v-slot:append>
        <v-icon icon="mdi-chevron-right"/>
      </template>
    </v-list-item>
  </v-list>
</div>
</template>

<style scoped>

</style>
