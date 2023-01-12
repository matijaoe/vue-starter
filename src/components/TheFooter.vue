<script lang="ts" setup>
import { isDark, toggleDark } from '../composables/dark'

const links = [
  { to: '/', label: 'home', icon: 'ph:house' },
]
</script>

<template>
  <footer py-4 flex items-center justify-center gap-4>
    <nav flex items-center justify-center gap-3 text-xl>
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        active-class="!text-primary-600 opacity-100"
        icon-btn
      >
        <Icon :name="link.icon" />
      </RouterLink>

      <button icon-btn @click="toggleDark()">
        <Icon :name="isDark ? 'ph:sun' : 'ph:moon'" />
      </button>

      <a
        icon-btn
        rel="noreferrer"
        href="https://github.com/mat2ja/vue-starter"
        target="_blank"
        title="GitHub"
      >
        <Icon name="ph:github-logo" />
      </a>
    </nav>
  </footer>
</template>
