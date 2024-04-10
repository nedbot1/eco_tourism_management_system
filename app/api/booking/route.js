import knex from "@/database";

export async function GET() {
  const booking = await knex("bookings").join.select("*");
  return new Response(JSON.stringify({ booking }), {
    status: 200,
  });
}
