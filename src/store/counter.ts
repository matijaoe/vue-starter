export const useCounterStore = defineStore('counter', () => {
  const counter = useCounter()
  const doubleCount = computed(() => counter.count.value * 2)

  return {
    ...counter,
    doubleCount,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
