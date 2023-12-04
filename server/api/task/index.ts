import type { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma;

  try {
    const tasks = await prisma.task.findMany();
    return { statusCode: 200, body: JSON.stringify(tasks) };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
});
