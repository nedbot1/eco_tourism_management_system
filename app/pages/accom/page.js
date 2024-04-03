"use client";

import { useState } from "react";

export default function Accommodation() {
  const [accommodations, setAccommodations] = useState([]);

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
      console.log("Data from API:", data);

      if (Array.isArray(data.accmo)) {
        setAccommodations(data.accmo);
      } else {
        throw new Error("Accommodations data is not an array");
      }
    } catch (error) {
      console.error("Error fetching accommodations:", error);
    }
  };

  return (
    <div>
      <div className="my-auto flex justify-center space-x-4">
        <div className="max-w-md w-full mt-5">
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="button"
            onClick={fetchAccommodations}
          >
            ACCOMMODATIONS
          </button>
        </div>
      </div>

      {/* Display accommodations */}
      {accommodations.length > 0 && (
        <div className="text-white mt-4">
          <ul>
            {accommodations.map((accommodation) => (
              <li key={accommodation.id}>
                <div className="grid-cols-2">
                  <button className="my-4 mx-4 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <div className="border-2 rounded-lg p-6 bg-transparent shadow-md">
                      <ul className="list-none">
                        <li className="mt-4">
                          <span className="font-semibold">NAME:</span>{" "}
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
                    </div>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
