import { NitroFetchRequest } from 'nitropack'
import { UseFetchOptions } from '#app'
import { KeyOfRes } from '#app/composables/asyncData'

export function useCustomFetch <T> (
  request: NitroFetchRequest,
  opts?:
		| UseFetchOptions<
		T extends void ? unknown : T,
		(res: T extends void ? unknown : T) => T extends void ? unknown : T,
	// @ts-ignore
		KeyOfRes<
			(res: T extends void ? unknown : T) => T extends void ? unknown : T
		>
	>
		| undefined
) {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  const authToken = authStore.token ? { Authorization: `Bearer ${authStore.token}` } : null

  // @ts-ignore
  return useFetch(request, {
    baseURL: config.public.apiBaseUrl,
    headers: {
      ...authToken
    },
    async onResponse ({ response }) {
      if (!response.ok) {
        if (response.status === 401 && response.url.search('login') === -1) {
          await authStore.logout()
        }
        if (response.status >= 400 && response.status < 500) {
          throw new Error(response._data.message)
        }

        return new Error(response._data.message)
      }
      return response._data
    },
    ...opts
  })
}
