import knex from "@/database";

export async function GET() {
  const priceoftours = await knex("accommodations").select(
    "accommodation_id",
    "price"
  );
  return new Response(JSON.stringify({ priceoftours }), {
    status: 200,
  });
}
