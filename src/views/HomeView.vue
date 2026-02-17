<script setup>
import { useTasksStore } from '../stores/tasks'
import TaskForm from '../components/tasks/TaskForm.vue'
import TaskList from '../components/tasks/TaskList.vue'
import TaskFilters from '../components/tasks/TaskFilters.vue'

const store = useTasksStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">

      <!-- encabezado -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Task Manager</h1>
        <p class="text-sm text-gray-500 mt-1">
          {{ store.completedTasks }} de {{ store.totalTasks }} tareas completadas
        </p>
      </div>

      <!-- formulario de nueva tarea -->
      <TaskForm />

      <!-- filtros y busqueda -->
      <TaskFilters />

      <!-- lista de tareas -->
      <TaskList />

    </div>
  </div>
</template>
