<script setup>
import {toCurrencyUAH} from "@/helpers/functions.js";

defineProps({
  t: Object
})
</script>

<template>
  <div class="d-flex">
    <div class="pa-2">
      <v-avatar size="" icon="mdi-cart"/>
    </div>
    <div class="s-dynamic-truncate-parent mr-3">
      <div class="font-weight-bold _truncate-child">{{t.category}}</div>
      <div class="text-grey-darken-1  _truncate-child">
        <v-icon icon="mdi-cash"/>
        <span>{{ t.account }}</span>
      </div>
      <div v-if="t.desc" class="text-grey-darken-1  _truncate-child">{{t.desc}}</div>
    </div>
    <div>
      {{toCurrencyUAH(t.sum)}}
    </div>

  </div>
</template>

<style lang="postcss" scoped>
.s-dynamic-truncate-parent {
  flex: 1;
  min-width: 0;

  & > ._truncate-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
