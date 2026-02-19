import { useTasksStore } from '../stores/tasks';

/**
 * determina si existe en la lista de tareas una con el id dado
 * @param {*} id task id
 * @returns boolean
 */
export function useExistsTaskInStore(id) {
  const store = useTasksStore();
  return store.tasks.some((t) => t.id === id);
}
