import type { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma;
  const { params } = event.context;

  const task = await prisma.list.findFirst({ where: { id: params.id } });
  if (!list) {
    throw createError({
      statusCode: 404,
      statusMessage: `Failed to find tasks with id ${params.id}`,
    });
  }

  return task;
});
