"use client";

import { useState } from "react";

export default function Dashboard() {
  const [tourPackages, setTourPackages] = useState([]);

  const fetchTourPackages = async () => {
    try {
      const response = await fetch("/api/tour_packages", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tour packages");
      }
      const data = await response.json();
      setTourPackages(data.tour_packages);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="max-w-md w-full mt-5 ">
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          type="button"
          onClick={fetchTourPackages}
        >
          TOUR PACKAGES
        </button>
      </div>
      {/* Display packages here */}
      {tourPackages.length > 0 && (
        <div className="text-white border-1 border-white bg-green">
          <ul>
            {tourPackages.map((tourPackage) => (
              <>
                <div className="my-auto mx-10">
                  <li key={tourPackage.id} className="mt-4">
                    TITLE: {tourPackage.title}
                  </li>
                  <li key={tourPackage.id} className="mt-4">
                    DESCRIPTION: {tourPackage.description}
                  </li>
                  <li key={tourPackage.id} className="mt-4">
                    PRICE: {tourPackage.price}
                  </li>
                  <li key={tourPackage.id} className="mt-4">
                    DURATION: {tourPackage.duration}
                  </li>
                </div>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
