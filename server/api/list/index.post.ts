import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

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
