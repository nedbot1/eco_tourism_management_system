"use client";

import TourPackages from "../tour_packages/page";
import Accommodation from "../accom/page";
import Navbar from "@/app/components/navbar/page";
import { useState } from "react";

export default function Dashboard() {
  const [TPAmount, setTPAmount] = useState(0);
  const [ACCAmount, setACCAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [packageId, setPackageId] = useState(null);
  const [accommodationId, setAccommodationId] = useState(null);
  return (
    <div
      className="bg-image pt-5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1608659377506-3b4fec4f7634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundColor: "#CBD5E0",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <TourPackages
        TPAmount={TPAmount}
        setTPAmount={setTPAmount}
        setPackageId={setPackageId}
      />
      <Accommodation
        ACCAmount={ACCAmount}
        setACCAmount={setACCAmount}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
        TPAmount={TPAmount}
        packageId={packageId}
        accommodationId={accommodationId}
        setAccommodationId={setAccommodationId}
      />
    </div>
  );
}
