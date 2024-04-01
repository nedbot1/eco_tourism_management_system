import knex from "@/database";
export async function GET() {
  const users = await knex("users").select("*");
  return new Response(JSON.stringify({ users }), { status: 200 });
}
