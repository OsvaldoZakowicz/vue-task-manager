import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useLocalStorage } from '../composables/useLocalStorage';

// store principal de tareas usando composition api style
export const useTasksStore = defineStore('tasks', () => {
  // estado
  const tasks = ref([]);
  const filter = ref('all'); // 'all' | 'pending' | 'completed'
  const searchQuery = ref('');

  // getters
  const filteredTasks = computed(() => {
    let result = tasks.value;

    // aplica filtro de estado
    if (filter.value === 'pending') {
      result = result.filter((task) => !task.completed);
    } else if (filter.value === 'completed') {
      result = result.filter((task) => task.completed);
    }

    // aplica busqueda por texto
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter((task) =>
        task.title.toLowerCase().includes(query),
      );
    }

    return result;
  });

  const totalTasks = computed(() => tasks.value.length);

  const completedTasks = computed(
    () => tasks.value.filter((t) => t.completed).length,
  );

  const pendingTasks = computed(() => totalTasks.value - completedTasks.value);

  // actions
  function addTask(title) {
    if (!title.trim()) return;

    tasks.value.push({
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    });
  }

  function toggleTask(id) {
    const task = tasks.value.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  }

  function updateTask(id, newTitle) {
    const task = tasks.value.find((t) => t.id === id);
    if (task && newTitle.trim()) task.title = newTitle.trim();
  }

  function setFilter(value) {
    filter.value = value;
  }

  function setSearchQuery(value) {
    searchQuery.value = value;
  }

  useLocalStorage('tasks', tasks);

  return {
    tasks,
    filter,
    searchQuery,
    filteredTasks,
    totalTasks,
    completedTasks,
    pendingTasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    setFilter,
    setSearchQuery,
  };
});
