"use client";
import { useEffect, useState, useContext } from "react";
import Navbar from "@/app/components/navbar/page";
import { UserContext } from "@/app/state/user-context";

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    async function GetSchedule() {
      const userId = user.user_id;
      const response = await fetch(
        `http://localhost:3000/api/booking/${userId}`
      );
      const { data } = await response.json();
      setSchedules(data);
    }

    GetSchedule();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {schedules.map((schedule) => {
          return (
            <div key={schedule.id}>
              <h1>{schedule.package_id}</h1>
              <h1>{schedule.total_price}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
