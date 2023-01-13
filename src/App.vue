<template>
  <main
    container mx-auto p="x-4 y-12" min-h-screen space-y-6
    text="center base-700 dark:base-200" font-sans caret-primary
  >
    <RouterView />
    <TheFooter />
  </main>
</template>

<style lang="postcss">
body {
  @apply bg-base-100 dark:bg-base-900 transition-colors duration-400;
}

::selection {
  @apply bg-primary-400/15 dark:bg-primary-300/20;
}
</style>
