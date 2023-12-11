import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt'],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  }
/*   auth: {
    provider: {
      type: 'local',
      endpoints: {
        register: {
          url: '/auth/register',
          method: 'POST'
        },
        login: {
          url: '/auth/login',
          method: 'POST'
        },
        logout: {
          url: '/auth/logout',
          method: 'POST'
        }
      },
      pages: {
        signup: '/Signup',
        login: '/Login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      sessionDataType: { id: 'string', email: 'string', name: 'string', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000
    },
    globalAppMiddleware: {
      isEnabled: false
    }
  } */
})
