'use client'

import { onOpenUrl } from '@tauri-apps/plugin-deep-link'
import { useEffect } from 'react'
import { env } from '~/env'
import { useAsyncEffect } from '~/hooks/use-async-effect'
import { useSession } from '~/hooks/use-session'
import { authClient } from '~/lib/auth'
import { BEARER_TOKEN_KEY } from '~/lib/constants'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { refetch } = useSession()

  useEffect(() => {
    authClient.$store.listen('$sessionSignal', () => refetch())
  }, [])

  async function listenDeepLinks() {
    if (env.NEXT_PUBLIC_IS_DESKTOP) {
      try {
        return await onOpenUrl(async ([url]) => {
          const [, token] = (url || '').split('session?token=')

          if (token) {
            localStorage.setItem(BEARER_TOKEN_KEY, token)
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
