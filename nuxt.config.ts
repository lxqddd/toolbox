export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: ['normalize.css', '~/assets/styles/variable.scss']
})
