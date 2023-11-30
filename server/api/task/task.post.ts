import type { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma;

  try {
    const body = await readBody(event);
    const data = { ...body };

    await prisma.task.create({ data });

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Item created successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
});
