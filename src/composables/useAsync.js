import { ref } from 'vue';

/**
 * composable generico para manejar operaciones asincronas,
 * encapsula los tres estados posibles: loading, error, success
 * de las operaciones asincronas
 *
 * el composable no sabe nada de tareas, ni de Vue Router,
 * ni de Pinia — es lógica pura reutilizable.
 */
export function useAsync() {
  const isLoading = ref(false); // al principio no carga
  const error = ref(null); // al principio no hay error
  const isSuccess = ref(false); // al principio no hay exito

  // ejecutar fn y gestionar estado
  async function execute(fn) {
    isLoading.value = true; // cargando
    error.value = null;
    isSuccess.value = false;

    try {
      const result = await fn();
      isSuccess.value = true;
      return result;
    } catch (err) {
      error.value = err?.message ?? 'ocurrio un error inesperado';
      return null;
    } finally {
      isLoading.value = false;
    }
  }

  // resetear valores al inicio
  function reset() {
    isLoading.value = false;
    error.value = null;
    isSuccess.value = false;
  }

  return {
    isLoading,
    error,
    isSuccess,
    execute,
    reset,
  };
}
