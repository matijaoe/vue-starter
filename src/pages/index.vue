<script lang="tsx" setup>
const name = $ref('')
const router = useRouter()

const go = () => {
  if (name) {
    router.push({
      name: 'hi',
      params: { name },
    })
  }
}
</script>

<template>
  <div space-y-8 flex flex-col items-center>
    <div space-y-4>
      <div>
        <Icon name="ph:file-vue" text-3xl text-emerald-600 />
      </div>
      <p font-inter>
        Opinionated Vue starter template
      </p>
    </div>

    <div flex flex-col gap-4 items-center>
      <TheInput
        v-model="name"
        placeholder="What's your name?"
        autocomplete="false"
        @keydown.enter="go"
      />
      <button btn text-sm uppercase :disabled="!name" @click="go">
        go
      </button>
    </div>
  </div>
</template>
