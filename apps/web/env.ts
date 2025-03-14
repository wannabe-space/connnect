import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  shared: {
    NEXT_PUBLIC_URL: z.string().min(1),
  },
  server: {
    DATABASE_URL: z.string().min(1),
    ENCRYPTION_SECRET: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    LOOPS_API_KEY: z.string().min(1),
    ANTHROPIC_API_KEY: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
})
