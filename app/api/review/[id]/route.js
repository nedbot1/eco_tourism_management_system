import knex from "@/database";

export async function POST(req, { params }) {
  const id = params.id;
  const body = await req.json();
  // const { packageId, totalPrice, accommodationId } = body;
  const { packageId, rating, comment } = body;
  const data = await knex("reviews")
    .insert({
      user_id: id,
      package_id: packageId,
      reviewDate: new Date().toISOString(),
      rating,
      comment,
    })
    .returning("*");
  return Response.json({ data });
}
