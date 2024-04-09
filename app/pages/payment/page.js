"use client";

import Navbar from "@/app/components/navbar/page";

export default function Payment({
  ACCAmount,
  totalAmount,
  TPAmount,
  setACCAmount,
  setTotalAmount,
  packageId,
}) {
  async function payment() {
    const response = await fetch(
      `../api/booking/${userId}`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageId: packageId,
          totalPrice: totalAmount,
        }),
      }
    );
    alert("payment confirm");
  }

  return (
    <>
      <Navbar />
    </>
  );
}
