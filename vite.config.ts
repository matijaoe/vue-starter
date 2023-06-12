import { URL, fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
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
        postcssNesting,
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
