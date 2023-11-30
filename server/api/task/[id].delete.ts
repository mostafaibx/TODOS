import type { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma;
  const { params } = event.context;

  try {
    const task = await prisma.list.findFirst({ where: { id: params.id } });
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: `Failed to find task with id ${params.id}`,
      });
    }

    prisma.task.delete({ where: { id: params.id } });

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Task deleted successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
});
