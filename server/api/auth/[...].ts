import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Credentials.default({
      name: 'Credentials',
      async authorize (credentials: any) {
        const { email, password } = credentials
        const user = await $fetch(
          '/api/auth/login',
          {
            method: 'POST',
            body: {
              email,
              password
            }
          }
        )
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // eslint-disable-next-line no-console
      console.log('token', token)
      return { ...token, userId: user?.id }
    },
    session: ({ session, user, token }) => {
      session.userId = token?.sub || user?.id
      // eslint-disable-next-line no-console
      console.log('session', session)
      return session
    },
    signIn: async ({ user }) => {
      const userExists = await prisma.user.findMany({
        where: {
          email: user.email!
        }
      })
      if (userExists.length === 0) {
        await $fetch('/api/auth/register',
          {
            method: 'POST',
            body: {
              email: user.email!,
              name: user.name!,
              password: 'password'
            }
          })
        return true
      } else {
        return true
      }
    }
  },
  session: {
    strategy: 'jwt'
  }
})
