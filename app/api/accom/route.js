import knex from "@/database";
export async function GET() {
  const accom = await knex("accommodations").select("*");
  return new Response(JSON.stringify({ accom }), {
    status: 200,
  });
}

export async function POST(req) {
  const body = await req.json();
  const { name, location, description, price, capacity } = body;
  const data = await knex("accommodations")
    .insert({
      name,
      location,
      description,
      price,
      capacity,
    })
    .returning("*");
  return Response.json({ data });
}
