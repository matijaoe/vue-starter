<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue'

const props = defineProps<{
  name: string
  size?: string
}>()

const sSize = computed(() => {
  const size = props.size || '1.25em'
  if (String(Number(size)) === size)
    return `${size}px`

  return size
})
</script>

<template>
  <Iconify :icon="name" class="icon" :width="sSize" :height="sSize" />
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
