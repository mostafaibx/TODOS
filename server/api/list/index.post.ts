import type { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma;

  try {
    const body = await readBody(event);
    const data = { ...body };

    await prisma.list.create({ data });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item created successfully" }),
    };
  } catch (error) {
    // Handle specific Prisma errors
    console.error(error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
});
