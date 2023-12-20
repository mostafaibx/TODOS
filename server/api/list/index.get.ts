import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

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
