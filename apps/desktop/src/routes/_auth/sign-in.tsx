import { Button } from '@connnect/ui/components/button'
import { Input } from '@connnect/ui/components/input'
import { Label } from '@connnect/ui/components/label'
import { cn } from '@connnect/ui/lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { isTauri } from '@tauri-apps/api/core'
import { open } from '@tauri-apps/plugin-shell'
import { Loader2 } from 'lucide-react'
// import { nanoid } from 'nanoid'
import { useState } from 'react'
import { toast } from 'sonner'
import { authClient, setBearerToken } from '~/lib/auth'

export const Route = createFileRoute('/_auth/sign-in')({
  component: SignInPage,
})

function SignInPage() {
  const [email, setEmail] = useState('valerii.strilets@gmail.com')
  const [password, setPassword] = useState('12345678')
  const [loading, setLoading] = useState(false)

  const googleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
      disableRedirect: true,
      callbackURL: '/?test=123',
    })

    if (error) {
      toast.error(error.message)
      return
    }

    await open(data.url!)

    // await open(`${env.VITE_PUBLIC_APP_URL}/auth/redirect?id=${id}`, '_blank')
  }

  async function signIn() {
    setLoading(true)
    const { error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        async onSuccess({ response }) {
          if (isTauri()) {
            const authToken = response.headers.get('set-auth-token')

            if (authToken) {
              await setBearerToken(authToken)
            }
          }
        },
      },
    )

    if (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          spellCheck="false"
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
        />
      </div>
      <div className="grid gap-2">
        <Input
          id="password"
          type="password"
          placeholder="password"
          autoComplete="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={loading}
        onClick={signIn}
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : 'Login'}
      </Button>
      <div
        className={cn(
          'w-full gap-2 flex items-center',
          'justify-between flex-col',
        )}
      >
        <Button
          variant="outline"
          className={cn('w-full gap-2')}
          onClick={googleSignIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"
            >
            </path>
          </svg>
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className={cn('w-full gap-2')}
          onClick={async () => {
            const { data, error } = await authClient.signIn.social({
              provider: 'github',
              disableRedirect: true,
              callbackURL: 'http://localhost:1420/sign-in/callback',
            })

            if (error) {
              toast.error(error.message)
              return
            }

            if (data.url) {
              window.open(data.url, '_blank')
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            >
            </path>
          </svg>
          Sign in with Github
        </Button>
      </div>
    </div>
  )
}
