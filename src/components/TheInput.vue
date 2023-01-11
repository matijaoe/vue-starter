<script lang="ts" setup>
const { modelValue: value } = defineModel<{
  modelValue: string
}>()
</script>

<template>
  <input
    v-model="value"
    type="text"
    v-bind="$attrs"
    p="x-4 y-2"
    w="full sm:64"
    text="center"
    bg="transparent"
    transition-colors duration-400
    border="~ rounded neutral-200 dark:neutral-800"
    outline="none active:none"
  >
</template>
