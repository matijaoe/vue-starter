import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          reactivityTransform: true,
        }),
      },
    }),
    Pages({
      routeBlockLang: 'yaml',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
      ],
      dirs: [
        'src/composables/**',
        'src/stores/**',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      dts: './src/components.d.ts',
    }),
    Unocss(),
  ],
  css: {
    postcss: {
      plugins: [
        require('postcss-nested'),
      ],
    },
  },
  resolve: {
    alias: {
      '~~': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
