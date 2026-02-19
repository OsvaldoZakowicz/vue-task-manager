<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100">
    <header v-if="$slots.header" class="px-5 py-4 border-b border-gray-100">
      <slot name="header" />
    </header>
    <section class="p-5 flex flex-col gap-2">
      <slot />
    </section>
    <footer v-if="$slots.footer" class="px-5 py-4 border-t border-gray-100">
      <slot name="footer" />
    </footer>
  </div>
</template>
