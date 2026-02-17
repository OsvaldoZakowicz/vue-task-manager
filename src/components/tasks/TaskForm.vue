<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../../stores/tasks'
import BaseButton from '../base/BaseButton.vue'
import BaseInput from '../base/BaseInput.vue'

const store = useTasksStore()
const newTaskTitle = ref('')

function handleSubmit() {
  store.addTask(newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>

<template>
  <div class="flex gap-2">
    <BaseInput
      v-model="newTaskTitle"
      placeholder="Nueva tarea..."
      @keyup.enter="handleSubmit"
    />
    <BaseButton @click="handleSubmit">Agregar</BaseButton>
  </div>
</template>
