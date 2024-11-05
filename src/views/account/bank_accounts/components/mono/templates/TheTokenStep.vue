<script setup>

import {ref} from "vue";
import {required} from "@/helpers/form_rules.js";
import {useFieldValidate} from "@/composables/field_validate.js";
import {useBankCreateStore} from "@/stores/accounts/bank.create.store.js";

const bankCreateStore = useBankCreateStore()
const tokenRef = ref()
const tokenRules = [required]
const tokenValidate = useFieldValidate(tokenRef)

const formCheck = () => tokenValidate.check()

defineExpose({
  formCheck
})
</script>

<template>

    <p class="mb-4">Токен потрібно отримати за посиланням <a href="https://api.monobank.ua/" target="_blank">https://api.monobank.ua/</a></p>
    <v-text-field
        label="Token"
        :rules="tokenRules"
        v-model="bankCreateStore.token"
        ref="tokenRef"
    />
</template>

<style scoped>

</style>