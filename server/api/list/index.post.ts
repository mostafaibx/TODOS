import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  if (!session) {
    return { status: 'unauthenticated!' }
  }
  // eslint-disable-next-line no-console
  console.log(session)
  try {
    const body = await readBody(event)
    const data = { ...body }

    if (!data.title || data.title.trim() === '') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name is required'
      })
    }
    if (!data.color || data.color.length < 1) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Color is required'
      })
    }

    await prisma.list.create({ data })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item created successfully' })
    }
  } catch (error) {
    return error
  }
})
