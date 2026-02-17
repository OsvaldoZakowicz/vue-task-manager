<script setup>
import { ref } from 'vue'
import BaseButton from '../base/BaseButton.vue'
import BaseInput from '../base/BaseInput.vue'

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'delete', 'update'])

// estado local de edicion
const isEditing = ref(false)
const editTitle = ref('')

function startEdit() {
  editTitle.value = props.task.title
  isEditing.value = true
}

function confirmEdit() {
  if (editTitle.value.trim()) {
    emit('update', props.task.id, editTitle.value)
  }
  isEditing.value = false
}

function cancelEdit() {
  isEditing.value = false
  editTitle.value = ''
}
</script>

<template>
  <div class="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">

    <!-- checkbox de completado -->
    <input
      type="checkbox"
      :checked="task.completed"
      @change="emit('toggle', task.id)"
      class="w-4 h-4 cursor-pointer accent-blue-600"
    />

    <!-- titulo o input de edicion -->
    <div class="flex-1">
      <BaseInput
        v-if="isEditing"
        v-model="editTitle"
        @keyup.enter="confirmEdit"
        @keyup.escape="cancelEdit"
      />
      <span
        v-else
        :class="['text-sm', task.completed ? 'line-through text-gray-400' : 'text-gray-800']"
      >
        {{ task.title }}
      </span>
    </div>

    <!-- acciones -->
    <div class="flex gap-2">
      <template v-if="isEditing">
        <BaseButton variant="primary" @click="confirmEdit">Guardar</BaseButton>
        <BaseButton variant="secondary" @click="cancelEdit">Cancelar</BaseButton>
      </template>
      <template v-else>
        <BaseButton variant="secondary" @click="startEdit">Editar</BaseButton>
        <BaseButton variant="danger" @click="emit('delete', task.id)">Eliminar</BaseButton>
      </template>
    </div>

  </div>
</template>
