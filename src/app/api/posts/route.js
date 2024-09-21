import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany(); 
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify({ error: "An error occurred while fetching posts" }), { status: 500 });
  }
}
