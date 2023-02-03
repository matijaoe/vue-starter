import { URL, fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        'vue/macros',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        'src/composables/**',
        'src/store/**',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: 'src/components.d.ts',
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
