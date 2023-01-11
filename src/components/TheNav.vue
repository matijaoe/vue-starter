<script lang="ts" setup>
const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
]
</script>

<template>
  <nav flex justify-center items-center gap-2 text-sm>
    <RouterLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      font-medium opacity-85 hover:opacity-100 px-1
      active-class="text-emerald-600 opacity-100"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>
