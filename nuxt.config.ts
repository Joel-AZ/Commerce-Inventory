import { createResolver } from '@nuxt/kit'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-11',

  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Inventory - Panel',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'dayjs-nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores']
  },

  css: ['vuetify/lib/styles/main.sass', '@/assets/css/tailwind.css', '@mdi/font/css/materialdesignicons.min.css'],

  dayjs: {
    locales: ['es'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'es',
    defaultTimezone: 'America/New_York'
  },

  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**']
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict'
    },
    storage: 'localStorage'
  },

  typescript: {
    shim: false
  },

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    },
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  runtimeConfig: {
    public: {
      environment: 'production',
      apiBaseUrl: 'https://api.san-carlos.com.py'
    }
  }
})
