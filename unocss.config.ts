import { theme } from '@unocss/preset-mini'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'font-medium px-4 py-1 rounded inline-block bg-primary-600 text-white cursor-pointer hover:bg-primary-700 disabled:(cursor-default bg-base-600 opacity-50)'],
    ['icon-btn', 'text-[0.95em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:(opacity-100 text-primary-600) !outline-none'],
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
    presetIcons({
      autoInstall: true,
      scale: 1.25,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
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
    transformerVariantGroup(),
  ],
})
