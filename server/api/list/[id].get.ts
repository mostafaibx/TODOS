import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  const session = await getServerSession(event)

  if (!session) {
    return { status: 'unauthenticated!' }
  }

  try {
    const list = await prisma.list.findFirst({
      where: { id: params?.id },
      include: { tasks: true }
    })
    if (!list) {
      throw createError({
        statusCode: 404,
        statusMessage: `Failed to find list with id ${params.id}`
      })
    }
    return list
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    }
  }
})
