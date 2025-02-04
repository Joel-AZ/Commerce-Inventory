import { navigateTo } from '#app'
import unauthenticatedRoutes from '@/utils/unauthenticatedRoutes.json'

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()
  const user = useUsersStore()

  const redirectLogout = to.query.logout

  // if (redirectLogout) {
  //   return navigateTo({ name: 'auth-logout' })
  // }

  // if (!auth.token) {
  //   auth.retrieveToken()
  // }

  // const token = computed(() => auth.token)
  // if (!user.currentUser && token.value) {
  //   await user.me()
  // }

  // const routeName = to.name
  // const isUnauthenticatedRoute = !!unauthenticatedRoutes[routeName]

  // if (isUnauthenticatedRoute && auth.token) {
  //   return navigateTo({ name: 'index' })
  // }

  // if (!auth.token && to.name.search('auth') === -1) {
  //   auth.logout()
  // }
})
