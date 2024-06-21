<script setup>
import {ref} from "vue";
import {isInteger} from "@/helpers/validators/index.js";

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  displayShow: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits({
  onResult: isInteger
})


const calcValue = ref(props.value.toString())
const isCalcMode = ref(false)

const number = value => {
  if (calcValue.value === 'NaN') {
    calcValue.value = '';
  }
  if (calcValue.value === '0') {
    calcValue.value = '';
  }

  calcValue.value += value.trim();
}

const operation = value => {
  const lastValue = getLastValue(calcValue.value)

  if (!isNaN(lastValue) && value === '=') {
    calcValue.value = eval(calcValue.value).toString()
  }
  else if (value === 'AC') {
    calcValue.value = '0'
  }
  else if (value === 'DEL') {
    calcValue.value = removeLastSymbol(calcValue.value)

    if (calcValue.value.length === 0) {
      calcValue.value = '0'
    }
  }
  else {

    if (['+', '-', '*', '/'].includes(lastValue)) {
      calcValue.value = removeLastSymbol(calcValue.value)
      calcValue.value += value
    }

    if (!isNaN(lastValue)) {
      calcValue.value += value
    }
  }
}

const pushEqual = () => {
  isCalcMode.value = false

  operation('=')
}

const done = () => {
  emit('onResult', parseFloat(calcValue.value))
}

const enabled = () => {
  isCalcMode.value = true
}

const getLastValue = value => value.substring(value.length, value.length - 1)
const removeLastSymbol = value => value.substring(0, value.length - 1)

defineExpose({calcValue})
</script>

<template>
  <div class="container">
    <div class="calc-text" v-if="displayShow">
      <p @click="isCalcMode = !isCalcMode">{{calcValue}}</p>
    </div>
    <div class="keyboard">
        <button type="button" @click="operation('AC')" class="key-others">AC</button>
        <button type="button" @click="operation('DEL')" class="key-others">DEL</button>
        <button type="button" @click="operation('%')" class="key-others">%</button>
        <button type="button" @click="[operation('/'), enabled()]" class="key-operate">/</button>
        <button type="button" @click="number('7')" class="">7</button>
        <button type="button" @click="number('8')" class="">8</button>
        <button type="button" @click="number('9')" class="">9</button>
        <button type="button" @click="[operation('*'), enabled()]" class="key-operate">*</button>
        <button type="button" @click="number('4')" class="">4</button>
        <button type="button" @click="number('5')" class="">5</button>
        <button type="button" @click="number('6')" class="">6</button>
        <button type="button" @click="[operation('-'), enabled()]" class="key-operate">-</button>
        <button type="button" @click="number('1')" class="">1</button>
        <button type="button" @click="number('2')" class="">2</button>
        <button type="button" @click="number('3')" class="">3</button>
        <button type="button" @click="[operation('+'), enabled()]" class="key-operate">+</button>
        <button type="button" @click="number('0')" class="key-zero ">0</button>
        <button type="button" @click="number('.')" class="">.</button>
        <button type="button" @click="pushEqual" v-if="isCalcMode" class="key-operate">=</button>
        <button type="button" @click="done" v-if="!isCalcMode" class="key-done">ok</button>
    </div>
  </div>
</template>

<style scoped>


.container {
  padding: 25px;
  width: 350px;
  border-radius: 10px;
  margin: 0 auto;
}
.calc-text {
  margin-bottom: 20px;
  padding-left: 5px;
}

.calc-text p {
  width: 100%;
  font-size: 3.5rem;
  text-align: end;
  background: transparent;
  border: none;
  outline: none;
  word-wrap: break-word;
  word-break: break-all;
}
button {
   background: #333333;
   color: #fff;
   font-size: 1.5rem;
   border: none;
   border-radius: 70%;
   cursor: pointer;
   height: 65px;
   width: 65px;
 }

button:active,
button:focus {
  filter: brightness(120%);
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 10px;
}

.key-zero {
  grid-column: span 2;
  width: 100%;
  border-radius: 30px;
}

.key-operate {
  background: #ff9501;
}

.key-done {
  background: #0ea122;
}

.key-others {
  background: #a6a6a6;
  color: #000000;
}
</style>
