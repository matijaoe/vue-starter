<script lang="ts" setup>
definePage({
  name: 'hello',
})

const route = useRoute('hello')
const name = computed(() => route.params.name)
</script>

<template>
  <div space-y-6>
    <div>
      <i i-fluent-emoji:alien text-4xl text-primary-600 />
      <div mt-4>
        <p v-if="name" text-lg>
          Hi <span text-primary-600>{{ name }}!</span>
        </p>
        <p opacity-75 text-xs font-mono mt-2>
          [dynamic route example]
        </p>
      </div>
    </div>

    <RouterLink btn to="/" text-sm>
      Back
    </RouterLink>
  </div>
</template>
