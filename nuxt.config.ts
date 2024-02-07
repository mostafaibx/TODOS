import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
    output: {
      dir: '../../.vercel/output'
    }
  },
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', '@sidebase/nuxt-auth'],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: true
    },
    origin: 'https://todos-opal-xi.vercel.app/'
  }
})
