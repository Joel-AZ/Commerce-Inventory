import { defineStore, acceptHMRUpdate } from 'pinia'
import { Users } from '~/models/Users.model'

export const useUsersStore = defineStore('users', () => {
  const currentUser = ref<Users>()

  const me = async () => {
    const { data }: any = await useCustomFetch('/auth/me')
    currentUser.value = data.value
  }

  return {
    currentUser,
    me
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}
