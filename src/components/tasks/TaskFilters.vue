<script setup>
import { useTasksStore } from '../../stores/tasks'
import BaseInput from '../base/BaseInput.vue'
import BaseButton from '../base/BaseButton.vue'

const store = useTasksStore()

const filters = [
  { label: 'Todas', value: 'all' },
  { label: 'Pendientes', value: 'pending' },
  { label: 'Completadas', value: 'completed' },
]
</script>

<template>
  <div class="flex flex-col gap-3">

    <!-- busqueda -->
    <BaseInput
      :modelValue="store.searchQuery"
      placeholder="Buscar tareas..."
      @update:modelValue="store.setSearchQuery"
    />

    <!-- filtros de estado -->
    <div class="flex gap-2">
      <BaseButton
        v-for="f in filters"
        :key="f.value"
        :variant="store.filter === f.value ? 'primary' : 'secondary'"
        @click="store.setFilter(f.value)"
      >
        {{ f.label }}
      </BaseButton>
    </div>

  </div>
</template>
