import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  try {
    let lists = await prisma.list.findMany({ where: { userId: session.userId } })
    if (!lists) {
      lists = []
    }
    return lists
  } catch (error) {
    return error
  }
})
