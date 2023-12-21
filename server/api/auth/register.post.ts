import type { H3Event } from 'h3'
import { z } from 'zod'

/* import { sign } from 'jsonwebtoken'
const refreshTokens: Record<number, Record<string, any>> = {}
 */
// first create a schema with zod
// second validate the date with zod
// third check if the user exists by email
// fourth create the user on db
// fifth generate access token by jwt
// sixth generate refresh token by jwt
// fifth return the tokens

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

  try {
    // Creating a schema with zod for validation of the request
    const result = z.object({
      email: z.string().email(),
      password: z.string(),
      name: z.string().min(3)
    }).safeParse(await readBody(event))

    if (!result.success) {
      throw createError({ statusCode: 403, statusMessage: 'Unauthorized, invalid credentials' })
    }

    // second check if the user exists
    const user = await prisma.user.findFirst({
      where: { email: result.data.email }
    })
    if (user) {
      throw createError({
        statusCode: 409,
        statusMessage: 'User already exists'
      })
    }

    // adding a photo here as a work around until implement it as defult value in prisma
    const data = {
      ...result.data,
      photo: 'https://i.pravatar.cc/300'
    }
    // third create the user on db
    await prisma.user.create({ data })
    return 'User created successfully'
  } catch (error) {
    return error
  }
})
