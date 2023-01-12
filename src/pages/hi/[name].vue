<script lang="ts" setup>
const route = useRoute()
const name = computed(() => route.params.name)
</script>

<template>
  <div>
    <div>
      <Icon name="fluent-emoji:alien" text-4xl text-primary-600 />
      <div mt-4>
        <p text-lg>
          Hi <span text-primary-600>{{ name }}!</span>
        </p>
        <p opacity-75 text-xs font-mono mt-2>
          [dynamic route example]
        </p>
      </div>
    </div>

    <RouterLink btn to="/" text-sm mt-6>
      Back
    </RouterLink>
  </div>
</template>

<route>
name: "hi"
</route>
