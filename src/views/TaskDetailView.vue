<script setup>
/* aca va la logica e inicio */
import { computed } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useTasksStore } from '../stores/tasks';

// useRoute da acceso a los params, query, name, etc. de la ruta activa
const route = useRoute()
const store = useTasksStore()

// extraemos el id de la ruta /task/:id
// ver estructura de un task en el action addTask de el store/tasks.js
// NOTA: funciones flecha con return IMPLICITO
const task = computed(() =>
  store.tasks.find((t) => t.id === route.params.id)
)

// guard de componente para navegacion
// si el usuario navega de /tasks/1 a /tasks/2 directamente
// el componente no se desmonta, solo cambia el param
onBeforeRouteUpdate((to) => {
  const exists = store.tasks.find(t => t.id === to.params.id)
  if (!exists) return { name: 'home' }
})

</script>
<template>
  <!-- aca va la vista como tal -->
  <!-- la variable task esta disponible en la vista -->
  <div class="max-w-2xl mx-auto px-4 py-10">

    <div v-if="!task" class="text-gray-400 text-sm">
      <span>Tarea no encontrada!</span>
    </div>
    <div v-else class="flex flex-col gap-4">
      <h1 class="text-xl font-bold text-gray-800">{{ task.title }}</h1>
      <p class="text-md text-gray-500">
        Estado: {{ task.completed ? "completada" : "pendiente" }}
      </p>
      <p class="text-sm text-gray-300 font-semibold">
        Creada: {{ new Date(task.createdAt).toLocaleString() }}
      </p>
    </div>

  </div>
</template>
