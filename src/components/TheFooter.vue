<script lang="ts" setup>
import { isDark, toggleDark } from '../composables/dark'
</script>

<template>
  <footer py-4 flex items-center justify-center>
    <div space-y-4>
      <div flex items-center justify-center gap-3 text-xl>
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
      </div>
    </div>
  </footer>
</template>
