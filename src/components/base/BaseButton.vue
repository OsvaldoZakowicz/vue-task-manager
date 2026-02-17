<script setup>
// props del componente
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
})

// hereda los atributos del padre automaticamente
defineOptions({ inheritAttrs: true })
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'px-4 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
      }
    ]"
  >
    <slot />
  </button>
</template>
