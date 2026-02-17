import { watch } from 'vue';

// composable generico para sincronizar un ref con localstorage
export function useLocalStorage(key, ref) {
  // intenta cargar el valor guardado al iniciar
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      ref.value = JSON.parse(saved);
    } catch {
      // si el valor guardado esta corrupto, lo ignora y usa el valor inicial
      localStorage.removeItem(key);
    }
  }

  // sincroniza localstorage cada vez que el ref cambia
  watch(
    ref,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true },
  );
}
