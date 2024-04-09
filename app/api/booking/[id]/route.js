import knex from "@/database";

export async function GET() {
  const booking = await knex("bookings").select("*");
  return new Response(JSON.stringify({ booking }), {
    status: 200,
  });
}

export async function POST(req, { params }) {
  const id = params.id;
  const body = await req.json();
  const { packageId, totalPrice, accommodationId } = body;
  const data = await knex("bookings")
    .insert({
      user_id: id,
      package_id: packageId,
      booking_date: new Date().toISOString(),
      total_price: totalPrice,
      accommodation_id: accommodationId,
    })
    .returning("*");
  return Response.json({ data });
}
