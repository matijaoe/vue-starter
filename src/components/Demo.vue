<script lang="ts" setup>
const name = ref('')
const router = useRouter()

function go() {
  if (name) {
    router.push({
      name: 'hello',
      params: { name: name.value },
    })
  }
}
</script>

<template>
  <div>
    <i i-ph:file-vue text-4xl text-primary-600 />
    <div mt-4>
      <p>
        Opinionated Vue starter template
      </p>
      <p mt-3 text-xs leading-relaxed font-mono opacity-75>
        UnoCSS . Pinia . VueUse . CSS Nesting . Auto imports . File based routing . ESLint
      </p>
    </div>
  </div>

  <div flex flex-col items-center gap-4>
    <div class="hover:animate-pul bg-blue-400/50" />
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
    <button
      text-sm
      uppercase
      btn
      :disabled="!name"
      @click="go"
    >
      go
    </button>
  </div>
</template>
