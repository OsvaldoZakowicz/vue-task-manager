<script setup>
import { ref, onMounted } from 'vue'
import { useTasksStore } from '../../stores/tasks'
import BaseButton from '../base/BaseButton.vue'
import BaseInput from '../base/BaseInput.vue'

const store = useTasksStore()
const newTaskTitle = ref('')

// referencia al componente BaseInput
const taskInput = ref(null);

// cuando el componente ya esta en el DOM hacemos foco
onMounted(() => { taskInput.value?.focus() })

function handleSubmit() {
  store.addTask(newTaskTitle.value)
  newTaskTitle.value = ''
  // despues de agregar, volvemos el foco al input
  taskInput.value?.focus()
}
</script>

<template>
  <div class="flex gap-2">
    <BaseInput
      ref="taskInput"
      v-model="newTaskTitle"
      placeholder="Nueva tarea..."
      @keyup.enter="handleSubmit"
    />
    <BaseButton @click="handleSubmit">Agregar</BaseButton>
  </div>
</template>
