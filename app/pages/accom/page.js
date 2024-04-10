"use client";

import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/app/state/user-context";
import { useRouter } from "next/navigation";

export default function Accommodation({
  ACCAmount,
  totalAmount,
  TPAmount,
  setACCAmount,
  setTotalAmount,
  packageId,
  accommodationId,
  setAccommodationId,
}) {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  // let userId = 1;
  let userId = user.user_id;

  useEffect(() => {
    if (selectedAccommodation) setACCAmount(selectedAccommodation.price);
  }, [selectedAccommodation]);

  async function book() {
    if (!selectedAccommodation || !packageId) {
      alert("Please select both a tour package and an accommodation.");
      return;
    }

    const response = await fetch(`../api/booking/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        packageId: packageId,
        totalPrice: totalAmount,
        accommodationId: accommodationId,
      }),
    });
    if (!response.ok) {
      alert("Failed to book. Please try again later.");
      return;
    }
    alert("Booking confirmed");
    router.push("/pages/schedule");
  }

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch("/api/accom", {
          method: "GET",
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

  setTotalAmount(Number(TPAmount) + Number(ACCAmount));

  return (
    <>
      <div className="bg-transparent border-t-2 pb-4">
        <div className="mt-2 backdrop-opacity-15 backdrop-invert bg-green-950/30 text-center w-60 mx-auto font-mono font-bold text-black p-2 rounded-xl">
          ACCOMMODATION OPTIONS
        </div>
        <div className="p-4 justify-center ">
          {accommodations.length > 0 && (
            <div className="text-white mt-4">
              <ul
                className="flex overflow-x-auto"
                style={{ scrollbarWidth: "thin" }}
              >
                {accommodations.map((accommodation) => (
                  <div
                    key={accommodation.accommodation_id}
                    className="flex-shrink-0 m-4"
                  >
                    <div className="border-2 rounded-lg p-6 backdrop-opacity-15 backdrop-invert bg-green-950/30  hover:bg-green-950">
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
                          type="radio"
                          name="selectedAccommodation"
                          onChange={() => {
                            setSelectedAccommodation(accommodation);
                            setAccommodationId(accommodation.accommodation_id);
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
        <div className="text-end text-black mt-4 mr-10">
          <div className="bg-gray-200 p-4 rounded-lg inline-block">
            <span className="font-semibold">Amount:</span>{" "}
            <span className="text-blue-600">{ACCAmount}</span>
          </div>
        </div>
        <div className="text-center text-black mt-10 space-x-4">
          <div className="bg-gray-200 p-4 rounded-lg inline-block">
            <span className="font-semibold">Total Amount:</span>{" "}
            <span className="text-blue-600">{totalAmount}</span>
          </div>
          <button
            onClick={() => book()}
            className="bg-gray-200 p-4 rounded-lg inline-block"
          >
            BOOK
          </button>
        </div>
      </div>
    </>
  );
}
