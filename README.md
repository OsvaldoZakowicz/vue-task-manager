# Vue task manager

SPA de gestión de tareas construida como primer contacto práctico con Vue 3 y su ecosistema. El objetivo del proyecto no es la aplicación en sí, sino recorrer los conceptos fundamentales del framework en un contexto real y funcional.

## Demo

[Ver en Netlify](https://vue3-task-manager.netlify.app/)

## Temas aprendidos con este proyecto

### Composition API

- `ref` y `reactive` para estado local
- `computed` para estado derivado con caché automático
- `watch` y `watchEffect` para efectos secundarios y sincronización
- Lifecycle hooks: `onMounted`, `onUnmounted`
- `defineExpose` para exponer métodos de componentes hijos al padre

### Helpers de reactividad

- `toRefs` y `toRef` para desestructurar objetos reactivos sin perder reactividad
- `unref` e `isRef` para escribir composables flexibles

### Componentes

- Props y emits con validación de tipos
- `v-model` en componentes propios con `modelValue` y `update:modelValue`
- Slots default, slots con nombre y scoped slots
- Registro local vs global de componentes
- `$slots` para renderizar wrappers condicionales

### Composables

Extracción de lógica reutilizable con funciones `use*`

- `useAsync` — patrón centralizado de estados loading / error / success
- `useLocalStorage` — persistencia reactiva en localStorage
- `useDocumentTitle` — sincronización reactiva del título del documento
- `useExistsTaskInStore` — determina si existe en la lista de tareas una con el id dado

### State management con Pinia

- Composition Store style — `ref`, `computed` y funciones dentro de `defineStore`
- Stores como fuente única de verdad
- Consumo de stores en composables y componentes

### Vue Router 4

- Rutas estáticas y dinámicas con parámetros
- Lazy loading de rutas con `() => import(...)`
- `useRoute` y `useRouter` para leer params y navegar programáticamente
- `RouterLink` con nombre de ruta en lugar de paths hardcodeados
- Guards de navegación: `beforeEach`, `beforeEnter`, `onBeforeRouteLeave`, `onBeforeRouteUpdate`
- `meta` en rutas para datos personalizados accesibles desde guards

## Stack

| Herramienta  | Versión | Uso                     |
| ------------ | ------- | ----------------------- |
| Vue 3        | ^3.x    | framework principal     |
| Vite         | ^5.x    | build tool y dev server |
| Pinia        | ^2.x    | state management        |
| Vue Router 4 | ^4.x    | navegación              |
| Tailwind CSS | ^3.x    | estilos utilitarios     |

## Instalación local

```bash
# clonar el repositorio
git clone https://github.com/OsvaldoZakowicz/vue-task-manager.git
cd vue-task-manager

# instalar dependencias
npm install

# iniciar servidor de desarrollo
npm run dev
```

## Scripts disponibles

```bash
npm run dev      # servidor de desarrollo en localhost:5173
npm run build    # build de producción en /dist
npm run preview  # preview del build de producción
```

## Estructura del proyecto

```
src/
├── components/
│   ├── base/          # componentes reutilizables (BaseButton, BaseInput, BaseCard)
│   └── tasks/         # componentes del dominio (TaskItem, TaskList, TaskForm, TaskFilters)
├── composables/       # lógica reutilizable (useAsync, useLocalStorage, useClock)
├── router/            # configuración de rutas
├── stores/            # estado global con Pinia
├── views/             # páginas que Vue Router monta (HomeView, TaskDetailView)
├── App.vue            # layout raíz
└── main.js            # punto de entrada
```

## Contexto

Este proyecto forma parte del Bloque 1 de un roadmap de 45 días de estudio intensivo de Laravel + Vue 3. El código del Task Manager se reutilizará parcialmente en el Bloque 3, donde se construirá una SPA completa consumiendo una API REST real.
