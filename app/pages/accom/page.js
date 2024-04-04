"use client";

import { useState, useEffect } from "react";

export default function Accommodation() {
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodations, setSelectedAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch("/api/accom", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch accommodations");
        }

        const data = await response.json();
        setAccommodations(data.accom);
      } catch (error) {
        console.error("Error fetching accommodations:", error);
      }
    };
    fetchAccommodations();
  }, []);
  const handleCheckboxChange = (id) => {
    const isSelected = selectedAccommodations.includes(id);
    if (isSelected) {
      setSelectedAccommodations(
        selectedAccommodations.filter((accId) => accId !== id)
      );
    } else {
      setSelectedAccommodations([...selectedAccommodations, id]);
    }
  };

  // Calculate total amount based on selected accommodations
  const totalAmount = selectedAccommodations.reduce((acc, accId) => {
    const accommodation = accommodations.find((acc) => acc.id === accId);
    return acc + (accommodation ? accommodation.price : 0);
  }, 0);

  return (
    <>
      <div className="bg-white">
        <div className="text-center text-black">YOUR ACCOMMODATION OPTIONS</div>
        <div className="p-4 justify-center ">
          {accommodations.length > 0 && (
            <div className="text-white mt-4">
              <ul className="flex overflow-x-auto">
                {accommodations.map((accommodation) => (
                  <div key={accommodation.id} className="flex-shrink-0 m-4">
                    <div className="border-2 rounded-lg p-6 bg-blue-500 shadow-md">
                      <ul className="list-none">
                        <li className="mt-4">
                          <span className="font-semibold">TITLE:</span>{" "}
                          {accommodation.name}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">DESCRIPTION:</span>{" "}
                          {accommodation.description}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">PRICE:</span>{" "}
                          {accommodation.price}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">LOCATION:</span>{" "}
                          {accommodation.location}
                        </li>
                        <li className="mt-4">
                          <span className="font-semibold">CAPACITY:</span>{" "}
                          {accommodation.capacity}
                        </li>
                      </ul>
                      <label className="block mt-4">
                        <input
                          type="checkbox"
                          onChange={() =>
                            handleCheckboxChange(accommodation.id)
                          }
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
      </div>
    </>
  );
}
