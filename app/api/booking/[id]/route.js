import knex from "@/database";

export async function GET() {
  const booking = await knex("bookings").select("*");
  return new Response(JSON.stringify({ booking }), {
    status: 200,
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { tourPackageIds, accommodationIds } = req.body;
      const tourPackagePrices = await Promise.all(
        tourPackageIds.map(async (id) => {
          const response = await fetch(`/api/tour_packages/${id}`);
          const data = await response.json();
          return data.tour_package.price;
        })
      );
      const accommodationPrices = await Promise.all(
        accommodationIds.map(async (id) => {
          const response = await fetch(`/api/accommodations/${id}`);
          const data = await response.json();
          return data.accommodation.price;
        })
      );
      const totalAmount =
        tourPackagePrices.reduce((acc, price) => acc + price, 0) +
        accommodationPrices.reduce((acc, price) => acc + price, 0);

      // Here you can insert the booking into the database and return the total amount
      res.status(200).json({ totalAmount });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to calculate total amount" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
