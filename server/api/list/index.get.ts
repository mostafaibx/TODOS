import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const session = await getServerSession(event)

  if (!session) {
    return { status: 'unauthenticated!' }
  }
  try {
    let lists = await prisma.list.findMany()
    if (!lists) {
      lists = []
    }
    return lists
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    }
  }
})
