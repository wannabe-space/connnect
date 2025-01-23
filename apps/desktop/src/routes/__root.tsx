import type { Session } from 'better-auth'
import { Toaster } from '@connnect/ui/components/sonner'
import { ThemeProvider } from '@connnect/ui/theme-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AnimatePresence } from 'motion/react'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { useState } from 'react'
import { AppProvider } from '~/app-provider'
import { EventsProvider } from '~/lib/events'
import { clientConfig, trpcReact } from '~/lib/trpc'
import { queryClient } from '~/main'

export const Route = createRootRouteWithContext<{ session: Session | null }>()({
  component: RootDocument,
})

function RootDocument() {
  const [trpcClient] = useState(() => trpcReact.createClient(clientConfig))
  const { Provider: TRPCClientProvider } = trpcReact

  return (
    <EventsProvider>
      <ThemeProvider>
        <NuqsAdapter>
          <TRPCClientProvider client={trpcClient} queryClient={queryClient}>
            <AppProvider>
              <AnimatePresence>
                <Outlet />
              </AnimatePresence>
              <Toaster />
            </AppProvider>
            {import.meta.env.DEV && (
              <>
                <TanStackRouterDevtools />
                <ReactQueryDevtools initialIsOpen={false} />
              </>
            )}
          </TRPCClientProvider>
        </NuqsAdapter>
      </ThemeProvider>
    </EventsProvider>
  )
}
