import { z } from 'zod'

/* import { sign } from 'jsonwebtoken'
const refreshTokens: Record<number, Record<string, any>> = {} */

// first valisate the date with zod
// second check if the user exists
// third check if the password is correct
// fourth return the user

export default eventHandler(async (event) => {
  const prisma = event.context.prisma

  // Creating a schema with zod for validation of the request
  const result = z.object({
    email: z.string().email(),
    password: z.string() // we should add a regex for password
  }).safeParse(await readBody(event))

  if (!result.success) {
    throw createError({ statusCode: 403, statusMessage: 'Unauthorized, invalid credentials' })
  }
  // second check if the user exists
  const user = await prisma.user.findFirst({
    where: { email: result.data.email }
  })
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  // third check if the password is correct
  if (user.password !== result.data.password) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Incorrect password'
    })
  }

  return user
})

// not sure about using bcrypt
/*   const isPasswordCorrect = await bcrypt.compare(data.password, user.password)
  if (!isPasswordCorrect) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Incorrect password'
    })
  } */

// implement refresh token after check with koko
/*   const expiresIn = 15
  const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
  const SECRET = 'dummy'

  const accessToken = sign({ ...user, scope: ['test', 'user'] }, SECRET, { expiresIn })
  refreshTokens[refreshToken] = {
    accessToken,
    user
  }

  return {
    token: {
      accessToken,
      refreshToken
    }
  }
}) */
