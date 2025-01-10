// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify, ThemeDefinition } from 'vuetify'
import * as directives from 'vuetify/directives'
import { es } from 'vuetify/locale'
// eslint-disable-next-line import/namespace
import * as components from 'vuetify/components'
import { VDateInput } from 'vuetify/labs/VDateInput'

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#00000',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00'
    }
  }

  const vuetify = createVuetify({
    ssr: false,
    directives,
    components: { ...components, VDateInput },
    locale: {
      locale: 'es',
      fallback: 'es',
      messages: { es }
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)

  return {
    provide: vuetify
  }
})
