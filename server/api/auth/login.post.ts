import { z } from 'zod'
import type { H3Event } from 'h3'

/* import { sign } from 'jsonwebtoken'
const refreshTokens: Record<number, Record<string, any>> = {} */

// first valisate the date with zod
// second check if the user exists
// third check if the password is correct
// fourth return the user

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

  // Creating a schema with zod for validation of the request
  const credentials = z.object({
    email: z.string().email(),
    password: z.string() // we should add a regex for password
  }).safeParse(await readBody(event))

  if (!credentials.success) {
    throw createError({ statusCode: 403, statusMessage: 'Unauthorized, invalid credentials' })
  }
  // second check if the user exists
  const user = await prisma.user.findFirst({
    where: { email: credentials.data.email }
  })
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  // third check if the password is correct
  if (user.password !== credentials.data.password) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Incorrect password'
    })
  }
  return user
})
