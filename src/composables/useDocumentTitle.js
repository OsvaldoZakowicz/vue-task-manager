import { watchEffect } from 'vue';

/**
 * actualizar el titulo del documento
 * @param {() => string} getTitleFn
 */
export function useDocumentTitle(getTitleFn) {
  // descubre lo reactivo en el callback y se encarga de observarlo,
  watchEffect(() => {
    // actualizara el titulo con el resultado del callback
    document.title = getTitleFn();
  });
}
