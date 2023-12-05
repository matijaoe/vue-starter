import type { App } from 'vue'

export default (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
}
