"use client";

import { useState, useEffect } from "react";

export default function TourPackages() {
  const [tourPackages, setTourPackages] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState([]);

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
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTourPackages();
  }, []);

  const handleCheckboxChange = (id) => {
    const isSelected = selectedPackages.includes(id);
    if (isSelected) {
      setSelectedPackages(selectedPackages.filter((pkgId) => pkgId !== id));
    } else {
      setSelectedPackages([...selectedPackages, id]);
    }
  };

  const totalAmount = selectedPackages.reduce((acc, pkgId) => {
    const pkg = tourPackages.find((pkg) => pkg.id === pkgId);
    return acc + (pkg ? pkg.price : 0);
  }, 0);

  return (
    <>
      <div className="bg-cyan-400 absolute"></div>
      <div className="bg-white">
        <div className="text-center text-black">YOUR PACKAGES OPTIONS</div>
        <div className="p-4 justify-center ">
          {tourPackages.length > 0 && (
            <div className="text-white mt-4">
              <ul className="flex overflow-x-auto">
                {tourPackages.map((tourPackage) => (
                  <div key={tourPackage.id} className="flex-shrink-0 m-4">
                    <div className="border-2 rounded-lg p-6 bg-blue-500 shadow-md">
                      <ul className="list-none">
                        <li className="mt-4">
                          <span className="font-semibold">TITLE:</span>{" "}
                          {tourPackage.title}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">DESCRIPTION:</span>{" "}
                          {tourPackage.description}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">PRICE:</span>{" "}
                          {tourPackage.price}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">DURATION:</span>{" "}
                          {tourPackage.duration}
                        </li>
                      </ul>
                      <label className="block mt-4">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(tourPackage.id)}
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
        <div className="text-center text-black mt-4">
          <div className="bg-gray-200 p-4 rounded-lg inline-block">
            <span className="font-semibold">Total Amount:</span>{" "}
            <span className="text-blue-600">{totalAmount}</span>
          </div>
        </div>
      </div>
    </>
  );
}

// {accommodation.name}
// </li>
// <li className="mt-4">
//   <span className="font-semibold">DESCRIPTION:</span>{" "}
//   {accommodation.description}
// </li>
// <li className="mt-4">
//   <span className="font-semibold">PRICE:</span>{" "}
//   {accommodation.price}
// </li>
// <li className="mt-4">
//   <span className="font-semibold">LOCATION:</span>{" "}
//   {accommodation.location}
// </li>
// <li className="mt-4">
//   <span className="font-semibold">CAPACITY:</span>{" "}
//   {accommodation.capacity}
