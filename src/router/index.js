import { createRouter, createWebHistory } from 'vue-router';
import { useExistsTaskInStore } from '../composables/useExistsTaskInStore';
import { isValidIdFormat } from '../utils/validators';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/TaskDetailView.vue'),
    beforeEnter: (to) => {
      // este es un guard de ruta de navegacion
      // si el id no es valido, redirecciona a home
      if (
        !isValidIdFormat(to.params.id) ||
        !useExistsTaskInStore(to.params.id)
      ) {
        return { name: 'home' };
      }
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    // cualquier ruta no definida redirige al inicio
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * guard global de navegacion
 * prueba de concepto
 */
router.beforeEach((to, from) => {
  // por ahora solo logueamos la navegacion para depurar
  // cuando haya auth real, aqui va la logica de proteccion o autenticacion de rutas
  console.log(`navegando de ${from.name ?? 'inicio'} → ${to.name}`);
});

export default router;
