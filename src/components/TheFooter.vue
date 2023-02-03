<script lang="ts" setup>
import { isDark, toggleDark } from '../composables/dark'

const links = [
  { to: '/', label: 'Home', icon: 'i-ph:house' },
  { to: '/does-not-exist', label: 'Page that does not exists', icon: 'i-ph:warning' },
]
</script>

<template>
  <footer py-4 flex items-center justify-center gap-4>
    <nav flex items-center justify-center gap-3 text-xl>
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :aria-label="link.label"
        :title="link.label"
        active-class="!text-primary-600 opacity-100"
        icon-btn
      >
        <i :class="link.icon" />
      </RouterLink>

      <button
        icon-btn
        aria-label="Toggle theme"
        title="Toggle theme"
        @click="toggleDark()"
      >
        <i :class="isDark ? 'i-ph:sun ' : 'i-ph:moon'" />
      </button>

      <a
        icon-btn
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
        href="https://github.com/mat2ja/vue-starter"
        target="_blank"
      >
        <i i-ph:github-logo />
      </a>
    </nav>
  </footer>
</template>
