<script lang="ts" setup>
const route = useRoute()
const name = computed(() => route.params.name)
</script>

<template>
  <div>
    <div space-y-4>
      <Icon name="ph:hand-waving" text-3xl text-emerald-600 />
      <p font-medium>
        Hi {{ name }}!
      </p>
    </div>

    <RouterLink btn to="/" text-sm mt-6>
      Back
    </RouterLink>
  </div>
</template>
