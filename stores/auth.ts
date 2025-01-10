import { acceptHMRUpdate, defineStore } from 'pinia'
import { UserDto } from '~/models/Users.model'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const userStore = useUsersStore()

  const token = ref<string>('')

  const retrieveToken = () => {
    if (window.localStorage) {
      const value = window.localStorage.getItem('token')

      if (value) {
        token.value = JSON.parse(value)
      }

      return value
    }
  }

  const setToken = (value: string) => {
    token.value = value

    if (window.localStorage) {
      window.localStorage.setItem('token', JSON.stringify(value))
    }
  }

  const register = async (userDto: UserDto) => {
    const {
      data,
      error
    }: any = await useCustomFetch('/auth/register', {
      method: 'POST',
      body: userDto
    })

    if (error.value) {
      throw new Error(error.value.message)
    }

    return data.value
  }

  const login = async (email: string, password: string, noRedirect = false) => {
    const {
      data,
      error
    }: any = await useCustomFetch('/auth/login', {
      method: 'POST',
      body: {
        email,
        password
      }
    })

    if (error.value) {
      throw new Error(error.value.message)
    }

    if (data.value) {
      setToken(data.value.accessToken)
    }

    if (!noRedirect) {
      return router.replace('/')
    }

    return data.value
  }

  const logout = async (redirect = true) => {
    token.value = ''

    if (window.localStorage) {
      window.localStorage.clear()
    }

    if (redirect) {
      await router.replace({
        name: 'auth-login',
        replace: true
      })
    }

    token.value = ''
    userStore.currentUser = undefined
  }

  return {
    token,
    retrieveToken,
    login,
    logout,
    register
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
