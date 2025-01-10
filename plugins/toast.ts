import Toast, { PluginOptions, POSITION } from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    timeout: 5000,
    position: POSITION.TOP_RIGHT,
    pauseOnFocusLoss: false
  }

  nuxtApp.vueApp.use(Toast, options)

  nuxtApp.provide('snotify', nuxtApp.vueApp.config.globalProperties.$snotify)
})
