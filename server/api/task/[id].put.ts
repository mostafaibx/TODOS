import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context

  try {
    const body = await readBody(event)
    const data = { ...body }

    const task = await prisma.task.findFirst({ where: { id: params.id } })
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: `Failed to find task with id ${params.id}`
      })
    }

    const updatedTask = await prisma.task.update({
      where: { id: params.id },
      data: {
        statu: data.completed
      }
    })

    return {
      statusCode: 201,
      body: JSON.stringify({ message: updatedTask })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
})
