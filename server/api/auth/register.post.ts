import type { H3Event } from 'h3'
import { z } from 'zod'

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
