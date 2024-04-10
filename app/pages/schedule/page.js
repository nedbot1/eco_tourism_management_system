"use client";
import { useEffect, useState, useContext } from "react";
import Navbar from "@/app/components/navbar/page";
import { UserContext } from "@/app/state/user-context";
import { formatDistance } from "date-fns";

export default function Schedule() {
  const [schedules, setSchedules] = useState(["no shedule found"]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    async function GetSchedule() {
      const userId = user.user_id;
      const response = await fetch(
        `http://localhost:3000/api/booking/${userId}`
      );
      const { data } = await response.json();
      setSchedules(data);
      console.log({ data });
    }

    GetSchedule();
  }, []);

  return (
    <div
      className="bg-image pt-5  flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1608659377506-3b4fec4f7634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundColor: "#CBD5E0",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="flex space-x-4 ">
        {schedules.map((schedule) => {
          return (
            <div>
              <div
                className="border-2 rounded-lg border-green-950/30 mt-2 backdrop-opacity-15 backdrop-invert bg-green-950/30  mx-auto p-2"
                key={schedule.id}
              >
                <h1>Name: {schedule.username}</h1>
                <h1>Hotel: {schedule.name}</h1>
                <h1>Tour Package: {schedule.title}</h1>
                <h1>Booking Date: {schedule.booking_date}</h1>
                <h1>Total Price: {schedule.total_price}</h1>
                <h1>Status: {schedule.status}</h1>
                <div className="text-center rounded-md backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950 p-2 mt-2">
                  <button>confirm payment</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
