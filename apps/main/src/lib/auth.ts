import { createAuthClient } from 'better-auth/client'
import { organizationClient, twoFactorClient } from 'better-auth/client/plugins'
import { env } from '~/env'

export const BEARER_TOKEN_KEY = 'connnect.bearer_token'

export async function getBearerToken() {
  if (env.VITE_PUBLIC_IS_DESKTOP && typeof window !== 'undefined') {
    return localStorage.getItem(BEARER_TOKEN_KEY)
  }

  return null
}

export async function setBearerToken(token: string) {
  if (env.VITE_PUBLIC_IS_DESKTOP && typeof window !== 'undefined') {
    localStorage.setItem(BEARER_TOKEN_KEY, token)
  }
}

export const authClient = createAuthClient({
  baseURL: env.VITE_PUBLIC_URL,
  fetchOptions: {
    async onRequest(context) {
      const token = await getBearerToken()

      if (token) {
        context.headers.set('Authorization', `Bearer ${token}`)
      }
    },
  },
  plugins: [organizationClient(), twoFactorClient()],
})
