"use client";

import TourPackages from "../tour_packages/page";
import Accommodation from "../accom/page";
import Navbar from "@/app/components/navbar/page";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <TourPackages />
      <Accommodation />
    </>
  );
}
