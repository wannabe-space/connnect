import { useRouter } from '@tanstack/react-router'
import { isTauri } from '@tauri-apps/api/core'
import { onOpenUrl } from '@tauri-apps/plugin-deep-link'
import { useEffect } from 'react'
import { useAsyncEffect } from '~/hooks/use-async-effect'
import { useSession } from '~/hooks/use-session'
import { authClient, setBearerToken } from '~/lib/auth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { refetch, isAuthenticated, isLoading } = useSession()
  const router = useRouter()

  useEffect(() => {
    authClient.$store.listen('$sessionSignal', () => refetch())
  }, [])

  useEffect(() => {
    if (!isLoading) {
      router.navigate({ to: isAuthenticated ? '/' : '/sign-in' })
    }
  }, [isLoading, isAuthenticated])

  async function listenDeepLinks() {
    if (isTauri()) {
      try {
        return await onOpenUrl(async ([url]) => {
          const [, token] = (url || '').split('session?token=')

          if (token) {
            await setBearerToken(token)
            await refetch()
          }
        })
      }
      catch {
        // Nothing to do - error can only occur if app is opened in browser
      }
    }
  }

  useAsyncEffect(() => {
    return listenDeepLinks()
  }, [])

  return (
    <>
      {children}
    </>
  )
}
