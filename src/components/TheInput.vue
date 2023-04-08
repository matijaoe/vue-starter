<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue'

interface Props extends InputHTMLAttributes {
  modelValue: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void
}>()

const value = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input
    v-model="value"
    v-bind="$attrs"
    type="text"
    p="x-4 y-2"
    w="full sm:64"
    text="center current"
    bg="transparent"
    transition-colors duration-400
    border="~ rounded base-200 dark:base-800"
    outline="none active:none"
    class="placeholder:opacity-50 placeholder:text-current"
  >
</template>
