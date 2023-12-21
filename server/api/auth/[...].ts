import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: '88d3982343c23cbb9cdf',
      clientSecret: '5a61d689ea55a6ebaeb644142a7dbb56dacb0dda'
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
