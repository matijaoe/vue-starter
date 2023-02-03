# Vue ✕ UnoCSS starter template

> Fully featured Vue 3 starter template

|🌞|🌚|
|---|---|
|<img width="445" alt="Light mode" src="https://user-images.githubusercontent.com/46557266/213271710-f59e6cf8-571e-4621-9fb9-2a58bd877bd6.png">|<img width="441" alt="Dark mode" src="https://user-images.githubusercontent.com/46557266/213271718-838259c8-2e71-4f0f-9bd5-fa6a5eef0d1c.png">|


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)
- 🗂 File based routing, fully typed
- 📦 Auto imported components
- 🫧 Auto imported APIs
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
- 👽 Pure CSS icons powered by [Iconify](https://docs.iconify.design/icon-components/vue/) - Over 100,000 icons across 100+ icon packs
- 🍍 [Pinia](https://pinia.vuejs.org/) - The Vue Store that you will enjoy using
- 🛠️ [VueUse](https://vueuse.org/) - Collection of essential Vue Composition Utilities
- 🔮 [Vue Macros](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue
- 💪🏻 TypeScript
- 🧹 ESLint / [antfu config](https://github.com/antfu/eslint-config)
- ☁️ Deploy with zero config

## Plugins

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
  - [`presetUno`](https://github.com/unocss/unocss/tree/main/packages/preset-uno) - Tailwind / Windi CSS compact preset
  - [`presetAttributify`](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) - Provides Attributify Mode to other presets and rules
  - [`presetTypography`](https://github.com/unocss/unocss/tree/main/packages/preset-typography) - The typography preset
  - [`presetIcons`](https://github.com/unocss/unocss/tree/main/packages/preset-icons) - Use any icons with Pure CSS for UnoCSS
  - [`presetWebFonts`](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts) - Web fonts at ease
  - [`transformerDirectives`](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - Transformer for `@apply`, `@screen` and `theme()` directives
  - [`transformerVariantGroup`](https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group) - Enables the [variant group feature of Windi CSS](https://windicss.org/features/variant-groups.html) for UnoCSS
- [Post CSS](https://postcss.org/)
  - [`postcss-nested`](https://github.com/postcss/postcss-nested)

### Vite Plugins

- [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - Automatic file based routing in with TypeScript support
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and other APIs without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto import
- [`unplugin-vue-macros`](https://vue-macros.sxzz.moe/) - Explore and extend more macros and syntax sugar to Vue

## Use the template

### GitHub Template
[Create a repo from this template on GitHub](https://github.com/mat2ja/vue-starter/generate)

### Local
Clone the template locally, with no git history (powered by [`unjs/giget`](https://github.com/unjs/giget))

```bash
npx giget gh:mat2ja/vue-starter <name>
```

```bash
# Install dependencies (if no pnpm installed, run: npm install -g pnpm)
pnpm i

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


## Related

- 🧚🏻 [`nuxt-starter`](https://github.com/mat2ja/nuxt-starter)
- 🔮 [`vue-anu-starter`](https://github.com/mat2ja/vue-anu-starter)
