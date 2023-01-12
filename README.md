# Vue ✕ UnoCSS starter template

<img width="776" alt="Preview" src="https://user-images.githubusercontent.com/46557266/212109067-de95a5ab-6efa-464a-b9a3-13d57fc3a72a.png">


<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 File based routing
- 📦 Auto imported components
- 🫧 Auto imported APIs
- 🍍 [Pinia](https://pinia.vuejs.org/) - The Vue Store that you will enjoy using
- 🛠️ [VueUse](https://vueuse.org/) - Collection of essential Vue Composition Utilities
- 🔮 [Vue Macros](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue.
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- 👽 Use any icon with zero setup, via [Iconify](https://docs.iconify.design/icon-components/vue/)
- 💪🏻 TypeScript
- 🧹 ESLint config by [antfu](https://github.com/antfu/eslint-config)
- ☁️ Deploy with zero config


<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
  - [presetUno](https://github.com/unocss/unocss/tree/main/packages/preset-uno) - Tailwind / Windi CSS compact preset
  - [presetAttributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) - Provides Attributify Mode to other presets and rules
  - [presetTypography](https://github.com/unocss/unocss/tree/main/packages/preset-typography) - The typography preset
  - [presetWebFonts](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts) - Web fonts at ease
  - [transformerDirectives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - Transformer for `@apply`、`@screen` and `theme()` directives
 - [PostCSS nested](https://www.npmjs.com/package/postcss-nested)

### Icons

- [Iconify](https://iconify.design) - Use icons from any icon set
- Find icons on [Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - File system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto import
- [`unplugin-vue-macros`](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue.

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
