import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  try {
    const list = await prisma.list.findFirst({ where: { id: params?.id } })
    if (!list) {
      throw createError({
        statusCode: 404,
        statusMessage: `Failed to find list with id ${params.id}`
      })
    } else {
      await prisma.list.delete({ where: { id: params?.id } })
      return {
        statusCode: 201,
        body: JSON.stringify({ message: 'List deleted successfully' })
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
})
