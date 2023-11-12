<script lang="ts" setup>
const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    v-bind="$attrs"
    type="text"
    p="x-4 y-2"
    w="full sm:64"
    text="center current"
    bg="transparent"
    transition-colors
    duration-400
    border="~ rounded base-200 dark:base-800"
    outline="none active:none"
    class="placeholder:text-current placeholder:opacity-50"
  >
</template>
