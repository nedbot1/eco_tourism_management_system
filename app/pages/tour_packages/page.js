"use client";

import { useState, useEffect } from "react";

export default function TourPackages({ TPAmount, setTPAmount, setPackageId }) {
  const [tourPackages, setTourPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    if (selectedPackage) setTPAmount(selectedPackage.price);
  }, [selectedPackage]);

  useEffect(() => {
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
        console.log(data.tour_packages);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTourPackages();
  }, []);

  return (
    <>
      <div className="">
        <div className="backdrop-opacity-15 backdrop-invert bg-green-950/30 text-center w-60 mx-auto font-mono font-bold text-black p-2 rounded-xl mt-14">
          PACKAGES OPTIONS
        </div>
        <div className="justify-center ">
          {tourPackages.length > 0 && (
            <div className="text-white ">
              <ul
                className="flex overflow-x-auto"
                style={{ scrollbarWidth: "thin" }}
              >
                {tourPackages.map((tourPackage) => (
                  <div key={tourPackage.id} className="flex-shrink-0 m-4">
                    <div className="border-2 rounded-lg p-6 backdrop-opacity-15 backdrop-invert bg-green-950/30 shadow-md w-96 h-80 text-center hover:bg-green-950">
                      <ul className="list-none">
                        <li className="mt-4">
                          <span className="font-semibold">TITLE:</span>{" "}
                          {tourPackage.title}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold"></span>{" "}
                          {tourPackage.description}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">PRICE:</span>{" "}
                          {tourPackage.price}/Nu
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">DURATION:</span>{" "}
                          {tourPackage.duration} days
                        </li>
                      </ul>
                      <label className="block mt-4">
                        <input
                          type="radio"
                          name="selectedPackage"
                          value={tourPackage.id}
                          onChange={() => {
                            setSelectedPackage(tourPackage);
                            setPackageId(tourPackage.package_id);
                          }}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2">Select Package</span>
                      </label>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="text-end mr-10 text-black mt-4 mb-4">
          <div className="bg-green-950/30 p-4 rounded-lg inline-block">
            <span className="font-semibold">Amount:</span>{" "}
            <span className="text-white">{TPAmount}/Nu</span>
          </div>
        </div>
      </div>
    </>
  );
}
