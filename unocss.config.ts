import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'
import { theme } from '@unocss/preset-mini'

export default defineConfig({
  shortcuts: [
    ['btn', 'font-medium px-4 py-1 rounded inline-block bg-primary-600 text-white cursor-pointer hover:bg-primary-700 disabled:cursor-default disabled:bg-base-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.95em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary-600 !outline-none'],
  ],
  theme: {
    colors: {
      primary: theme.colors?.emerald,
      base: theme.colors?.neutral,
    },
  },
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
          name: 'DM Mono',
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
