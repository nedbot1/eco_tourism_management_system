"use client";

import TourPackages from "../tour_packages/page";
import Accommodation from "../accom/page";
import Navbar from "@/app/components/navbar/page";
import { useState } from "react";

export default function Dashboard() {
  const [TPAmount, setTPAmount] = useState(0);
  const [ACCAmount, setACCAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div
      className="bg-image pt-5"
      style={{
        backgroundImage: `url('https://photopedia.in/wp-content/uploads/2017/12/wide-angle.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundColor: "#CBD5E0",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <TourPackages TPAmount={TPAmount} setTPAmount={setTPAmount} />
      <Accommodation
        ACCAmount={ACCAmount}
        setACCAmount={setACCAmount}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
        TPAmount={TPAmount}
      />
    </div>
  );
}
