<script setup>
import { ref } from 'vue';

// v-model en vue 3 usa modelValue + update:modelValue
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

// queremos exponer el evento focus del input hacia el elemento padre
// 1- referencia al elemento input (ref="" en el propio input)
const inputEl = ref(null);

// 2- exponemos evento
defineExpose({ focus: () => inputEl.value?.focus() })

function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input
    ref="inputEl"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput"
    class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500
           disabled:opacity-50 disabled:cursor-not-allowed"
  />
</template>
