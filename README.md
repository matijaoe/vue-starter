# Better Vue + UnoCSS template

    🚧 Work in progress

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/pages)

- 📦 Components auto importing

- 🫧 Auto imported APIs

- 🛠️ [VueUse](https://vueuse.org/) - Collection of essential Vue Composition Utilities

- 🍍 [Pinia](https://pinia.vuejs.org/) - The Vue Store that you will enjoy using

- 🍍 [Vue Macros](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue.

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use any icon with zero setup, via [Iconify](https://docs.iconify.design/icon-components/vue/)

- 🦾 TypeScript

- 🧹 ESLint config by [antfu](https://github.com/antfu/eslint-config)

- ☁️ Deploy on Vercel, zero-config


<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
  - [presetUno](https://github.com/unocss/unocss/tree/main/packages/preset-uno) - Tailwind / Windi CSS compact preset
  - [presetAttributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) - Provides Attributify Mode to other presets and rules
  - [presetTypography](https://github.com/unocss/unocss/tree/main/packages/preset-typography) - The typography preset
  - [presetWebFonts](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts) - Web fonts at ease
  - [transformerDirectives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - Transformer for `@apply`、`@screen` and `theme()` directive in `<style>` tags

### Icons

- [Iconify](https://iconify.design) - use icons from any icon set
- Find icons on [Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Use the template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mat2ja/vue-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit mat2ja/vue-starter my-vue-app
cd my-vue-app

# Install dependencies
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

# Start dev server
pnpm dev

# Build for production
pnpm build

# Deploy anywhere
pnpm deploy:vercel # vercel
pnpm deploy:ntl # netlify
pnpm deploy:surge # surge.sh
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
