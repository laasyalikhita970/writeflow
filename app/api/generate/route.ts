export async function POST(req: Request) {

  const { prompt } = await req.json();

  return Response.json({
    content: `AI response for: ${prompt}`,
  });
}