<script setup>
import { useTasksStore } from '../stores/tasks'
import { useDocumentTitle } from '../composables/useDocumentTitle'
import TaskForm from '../components/tasks/TaskForm.vue'
import TaskList from '../components/tasks/TaskList.vue'
import TaskFilters from '../components/tasks/TaskFilters.vue'
import BaseCard from '../components/base/BaseCard.vue'

const store = useTasksStore()

// quiero que el titulo de la pestaña diga "(n) Task Manager" o "Task Manager"
// donde n es el numero de tareas pendientes
useDocumentTitle(() => {
  // tasks es reactivo, sera lo que vue registre para wathcEffect
  const pending = store.tasks.filter((t) => !t.completed).length;
  return pending > 0 ? `(${pending} pendientes) — Task Manager` : 'Task Manager';
})

</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">
      <BaseCard>
        <template #header>
          <h1 class="text-3xl font-bold text-gray-900">🎯 Task Manager</h1>
          <p class="text-sm text-gray-500 mt-1">
            {{ store.completedTasks }} tareas completadas, {{ store.pendingTasks }} pendientes
          </p>
        </template>

        <!-- formulario de nueva tarea -->
        <TaskForm />

        <!-- filtros y busqueda -->
        <TaskFilters />

        <!-- feedback de error -->
        <p v-if="store.error" class="text-sm text-red-500 mt-1">{{ store.error }}</p>

        <!-- feedback de carga o lista -->
        <p v-if="store.isLoading" class="text-sm text-gray-500 mt-1">procesando...</p>
        <TaskList v-else />

        <template #footer>
          <p class="text-xs text-gray-400">{{ store.totalTasks }} tareas registradas</p>
        </template>
      </BaseCard>
    </div>
  </div>
</template>
