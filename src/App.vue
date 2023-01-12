<template>
  <main
    container mx-auto p="x-4 y-10" min-h-screen
    text="center neutral-700 dark:neutral-200" font-sans
    space-y-8
  >
    <TheNav />
    <RouterView />
    <TheFooter />
  </main>
</template>

<style lang="postcss">
body {
  @apply bg-neutral-100 dark:bg-neutral-900 transition-colors duration-400 caret-emerald-600;
}

::selection {
  @apply bg-emerald-300/30 dark:bg-emerald-300/20;
}
</style>
