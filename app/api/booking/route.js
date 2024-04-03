import knex from "@/database";

// export async function GET() {
//   const booking = await knex("bookings").select("*");
//   return new Response(JSON.stringfy({ booking }), {
//     status: 200,
//   });
// }

export async function GET() {
  const booking = await knex("bookings").select("*");
  return new Response(JSON.stringify({ booking }), {
    status: 200,
  });
}
