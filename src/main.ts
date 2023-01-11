import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '~/plugins/pinia'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
