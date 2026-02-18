<template>
  <div>
    <!-- navegacion global -->
    <nav class="border-b border-gray-200 bg-white">
      <div class="max-w-2xl mx-auto px-4 py-3 flex gap-4">
        <!-- RouterLink es el componente de navegacion de Vue Router -->
        <!-- no recarga la pagina, intercepta el click -->
        <RouterLink
          to="/"
          class="text-sm text-gray-600 hover:text-gray-900"
          active-class="font-semibold text-gray-900"
        >
          Tareas
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-sm text-gray-600 hover:text-gray-900"
          active-class="font-semibold text-gray-900"
        >
          Acerca de
        </RouterLink>
      </div>
    </nav>

    <!-- aqui vue router monta el componente de la ruta activa -->
    <RouterView />
  </div>
</template>
