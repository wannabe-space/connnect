import { betterAuth } from 'better-auth'
import { emailHarmony } from 'better-auth-harmony'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { bearer, organization, twoFactor } from 'better-auth/plugins'
import { v7 } from 'uuid'
import { db } from '~/drizzle'
import { env } from '~/env'

export const auth = betterAuth({
  appName: 'Connnect',
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.NEXT_PUBLIC_URL,
  plugins: [
    twoFactor(),
    bearer(),
    organization(),
    emailHarmony(),
  ],
  trustedOrigins: process.env.NODE_ENV === 'production' ? ['tauri://localhost'] : ['http://localhost:1420'],
  // databaseHooks: {
  //   session: {
  //     create: {
  //       before: async (session) => {
  //         // const organization = await getActiveOrganization(session.userId)
  //         return {
  //           data: {
  //             ...session,
  //             // activeOrganizationId: organization.id,
  //           },
  //         }
  //       },
  //     },
  //   },
  // },
  advanced: {
    generateId: () => v7(),
    cookiePrefix: 'connnect',
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
})
