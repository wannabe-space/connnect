import type { Session } from 'better-auth'
import { QueryClient } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import { initEvents } from './lib/events'
import { sessionQuery } from './queries/auth'
import { routeTree } from './routeTree.gen'
import './assets/styles/fonts.css'
import '@connnect/ui/globals.css'

initEvents()

export const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    session: null as Session | null,
  },
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = createRoot(document.getElementById('app')!)
const logo = document.getElementById('logo')!

queryClient.ensureQueryData(sessionQuery).then(async ({ data }) => {
  logo.classList.add('scale-[0.5]')
  // Waiting animation to start
  await new Promise(resolve => setTimeout(resolve, 50))
  root.render(<RouterProvider router={router} context={{ session: data?.session || null }} />)
})
