import knex from "@/database";
export async function GET() {
  const tour_packages = await knex("tour_packages").select("*");
  return new Response(JSON.stringify({ tour_packages }), {
    status: 200,
  });
}

export async function POST(req) {
  const body = await req.json();
  const { title, description, duration, price, location } = body;
  const data = await knex("tour_packages")
    .insert({
      title: title,
      location: location,
      description: description,
      duration: duration,
      price: price,
    })
    .returning("*");
  return Response.json({ data });
}
