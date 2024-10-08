import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', "nuxtjs-naive-ui", 'nuxt-monaco-editor'],
  monacoEditor: {
    locale: 'en',
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor'
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? 'toolbox' : '/',
    layoutTransition: { name: 'layout', mode: 'out-in' },
    buildAssetsDir: 'nuxt_assets'
  },
  nitro: {
    prerender: {
      // routes: ['JsonFormatter'],
      ignore: ['/404.html', '/200.html', '/EnhanceImage'],
      crawlLinks: true
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  css: ['normalize.css', '~/assets/styles/variable.scss'],
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  },
  routeRules: {
    '/': {
      redirect: '/JsonFormatter'
    }
  },

})