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
        <p mt-2 text-xs font-mono opacity-75>
          [dynamic route example]
        </p>
      </div>
    </div>

    <RouterLink to="/" text-sm btn>
      Back
    </RouterLink>
  </div>
</template>
