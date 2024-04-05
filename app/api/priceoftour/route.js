import knex from "@/database";

export async function GET() {
  const priceoftours = await knex("tour_packages").select(
    "package_id",
    "price"
  );
  return new Response(JSON.stringify({ priceoftours }), {
    status: 200,
  });
}
