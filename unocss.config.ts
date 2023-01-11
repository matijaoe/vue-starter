import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'font-medium px-4 py-1 rounded inline-block bg-emerald-700 text-white cursor-pointer hover:bg-emerald-800 disabled:cursor-default disabled:bg-neutral-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.95em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-emerald-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Satoshi',
          provider: 'fontshare',
        },
        mono: {
          name: 'IBM Plex Mono',
          provider: 'google',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    // transformerVariantGroup(),
  ],
})
