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
    text="center current"
    bg="transparent"
    transition-colors duration-400
    border="~ rounded base-200 dark:base-800"
    outline="none active:none"
    placeholder:opacity-50 placeholder:text-current
  >
</template>
