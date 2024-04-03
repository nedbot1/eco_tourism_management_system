"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function TourPackages() {
  const [tourPackages, setTourPackages] = useState([]);
  const router = useRouter();

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
      //   router.push("/pages/tour_packages");
      const data = await response.json();
      setTourPackages(data.tour_packages);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className=" my-auto flex justify-center space-x-4 ">
        <div className="max-w-md w-full mt-5 ">
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="button"
            onClick={fetchTourPackages}
          >
            TOUR PACKAGES
          </button>
        </div>
      </div>
      {/* Display packages here */}
      {tourPackages.length > 0 && (
        <div className="text-white mt-4">
          <ul>
            {tourPackages.map((tourPackage) => (
              <>
                <div className="grid-cols-2">
                  <button
                    onClick={() => router.push("/pages/accom")}
                    className=" my-4 mx-4 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <div className=" border-2 rounded-lg p-6 bg-transparent shadow-md">
                      <ul className="list-none">
                        <li key={tourPackage.id} className="mt-4">
                          <span className="font-semibold">TITLE:</span>{" "}
                          {tourPackage.title}
                        </li>
                        <li key={tourPackage.id} className="mt-4">
                          <span className="font-semibold">DESCRIPTION:</span>{" "}
                          {tourPackage.description}
                        </li>
                        <li key={tourPackage.id} className="mt-4">
                          <span className="font-semibold">PRICE:</span>{" "}
                          {tourPackage.price}
                        </li>
                        <li key={tourPackage.id} className="mt-4">
                          <span className="font-semibold">DURATION:</span>{" "}
                          {tourPackage.duration}
                        </li>
                      </ul>
                    </div>
                  </button>
                </div>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
