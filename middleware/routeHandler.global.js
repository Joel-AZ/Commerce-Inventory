import { navigateTo } from '#app'
import unauthenticatedRoutes from '../utils/unauthenticatedRoutes.json'

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()
  const user = useUsersStore()

  const isUnauthenticatedRoute = Boolean(unauthenticatedRoutes[to.name])

  if (!auth.token) { auth.retrieveToken() }

  if (isUnauthenticatedRoute && !auth.token) {
    if (to.name === 'auth-login') {
      return
    }
    if (to.name === 'auth-register-owner') {
      return
    }
    return navigateTo({ name: 'auth-login' })
  }

  if (!auth.token && !isUnauthenticatedRoute) {
    return navigateTo({ name: 'auth-login' })
  }

  if (auth.token && isUnauthenticatedRoute) {
    return navigateTo({ name: 'index' })
  }

  if (auth.token && !isUnauthenticatedRoute) {
    await user.me()
    // hacer logica de que si el usuario esta pendiente que no le lleve al dashboard sino que le lleve a una vista de que se contacte con nosotros para darle acceso
    return
  }

  if (!localStorage.getItem('token')) { await auth.logout() }
})
