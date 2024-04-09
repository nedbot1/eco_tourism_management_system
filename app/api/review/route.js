import knex from "@/database";
export async function GET() {
  const review = await knex("reviews").select("*");
  return new Response(JSON.stringify({ review }), {
    status: 200,
  });
}
