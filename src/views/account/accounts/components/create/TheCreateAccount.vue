<script setup>
import {ACCOUNT_TYPE_BANK, ACCOUNT_TYPE_CASH, ACCOUNT_TYPE_DEBT, ACCOUNT_TYPE_OTHER} from "@/helpers/constants.js";
import {computed, ref} from "vue";

defineEmits([
    'accountSave',
    'dialogClose'
])
const props = defineProps({
  accountType: String,
})

const types = {
  [ACCOUNT_TYPE_BANK]: 'Банківський рахунок',
  [ACCOUNT_TYPE_CASH]: 'Готівка',
  [ACCOUNT_TYPE_OTHER]: 'Інший актив',
  [ACCOUNT_TYPE_DEBT]: 'Борг'
}

const currencies = [
  {name: 'Гривня', short: 'uah', icon: 'mdi-currency-uah'},
  {name: 'Долар', short: 'usd', icon: 'mdi-currency-usd'},
  {name: 'Євро', short: 'eur', icon: 'mdi-currency-eur'},
]

const type = ref(types[props.accountType])
const currencyModel = ref('uah')
const currency = computed(() => currencies.find(i => currencyModel.value === i.short))

</script>

<template>
  <v-card
      prepend-icon="mdi-wallet-plus-outline"
      title="Додати рахунок"
  >
    <v-card-text>
      <div class="text-center mb-4">
        <v-avatar size="x-large" icon="mdi-cash" color="green"/>
      </div>
      <v-text-field label="Назва рахунку"/>

      <div class="s-card-text-block">
        <div>
          <div>Тип рахунку</div>
          <div>{{type}}</div>
        </div>
        <v-divider/>
        <div>
          <div>Валюта</div>
          <div>
            <v-select
                v-model="currencyModel"
                :items="currencies"
                item-value="short"
                item-title="name"
                variant="underlined"
            ></v-select>
          </div>
        </div>
        <v-divider/>
        <div>
          <div>Баланс</div>
          <div>
            <v-text-field

                density="compact"
                width="100"
                variant="underlined"
                :append-inner-icon="currency.icon"
            />
          </div>
        </div>
        <v-divider/>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
          text="Відміна"
          variant="plain"
          @click="$emit('dialogClose')"
      ></v-btn>

      <v-btn
          color="primary"
          text="Зберегти"
          variant="tonal"
          @click="$emit('accountSave')"
      ></v-btn>
    </v-card-actions>
  </v-card>

</template>

<style lang="postcss" scoped>

.s-card-text-block {
  margin-left: -24px;
  width: calc(100% + 47px);

  > div {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }
}
</style>
