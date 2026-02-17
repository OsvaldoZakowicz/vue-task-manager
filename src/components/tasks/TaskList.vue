<script setup>
import { useTasksStore } from '../../stores/tasks'
import TaskItem from './TaskItem.vue'

const store = useTasksStore()
</script>

<template>
  <div class="flex flex-col gap-2">

    <!-- mensaje cuando no hay tareas -->
    <p
      v-if="store.filteredTasks.length === 0"
      class="text-center text-gray-400 text-sm py-8"
    >
      No hay tareas para mostrar.
    </p>

    <!-- lista de tareas -->
    <TaskItem
      v-for="task in store.filteredTasks"
      :key="task.id"
      :task="task"
      @toggle="store.toggleTask"
      @delete="store.deleteTask"
      @update="store.updateTask"
    />

  </div>
</template>
