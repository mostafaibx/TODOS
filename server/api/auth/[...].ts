import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import { NuxtAuthHandler } from '#auth'

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  callbacks: {
    signIn: async ({ user }) => {
      const userExists = await prisma.user.findMany({
        where: {
          email: user.email!
        }
      })
      if (userExists !== []) {
        await $fetch(
          '/api/auth/register',
          {
            method: 'POST',
            body: {
              email: user.email!,
              name: user.name!,
              password: 'password'
            }
          }
        )
        return true
      } else {
      return true
    }
  },
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
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ]
})
