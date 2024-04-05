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
    <div>
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
