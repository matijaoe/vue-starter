<template>
  <main
    p="x-4 y-12"
    text="center base-700 dark:base-200"
    mx-auto
    min-h-screen
    font-sans
    caret-primary
    container
    space-y-6
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
