import knex from "@/database";

export async function GET(request, { params }) {
  const userId = params.id;
  const { searchParams } = request.url;
  const data = await knex("bookings")
    .join("users", "users.user_id", "=", "bookings.user_id")
    .join(
      "tour_packages",
      "tour_packages.package_id",
      "=",
      "bookings.package_id"
    )
    .join(
      "accommodations",
      "accommodations.accommodation_id",
      "=",
      "bookings.accommodation_id"
    )
    .where("bookings.user_id", userId)
    .select(
      "booking_date",
      "total_price",
      "status",
      "users.username",
      "tour_packages.title",
      "accommodations.name"
    );

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
