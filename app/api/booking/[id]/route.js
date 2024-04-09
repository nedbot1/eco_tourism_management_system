import knex from "@/database";

export async function GET(request, { params }) {
  const userId = params.id;
  const { searchParams } = request.url;
  const data = await knex("bookings")
    .where("bookings.user_id", userId)
    .select("*");
  return Response.json({ data });
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
