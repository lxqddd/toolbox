import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: '',
      collections: {
        mdi: () =>import('@iconify-json/mdi/icons.json').then(i => i.default)
      }
    })
  ],
  rules: []
})