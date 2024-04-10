"use client";
import { UserContext } from "@/app/state/user-context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();

  const { user } = useContext(UserContext);
  // const user = {
  //   user_name: "Guest",
  //   email: "guest@example.com",
  // };

  return (
    <div className="bg-green-950/30 text-white py-4 rounded-b-lg fixed top-0 w-full justify-between px-4 flex ">
      <div>
        <span className="font-bold">{user.user_name}</span>
      </div>
      <div className="flex items-center mx-auto h-10 w-1/2 rounded-full bg-green-950/30 p-2 pl-4">
        <img
          src="/buttons/search.jpg"
          className="backdrop-opacity-15 backdrop-inverth-8 w-8 mr-2"
        />
        <input
          className=" border-none text-white focus:outline-none placeholder-white::placeholder
              rounded-full
              p-2
              bg-transparent"
          style={{ maxWidth: "100%" }} // Limiting the width of the input field
          placeholder="Search..."
        />
      </div>
      <div className="flex justify-evenly space-x-2 mr-4">
        <div className="p-2">
          <Link
            href="../components/cpn"
            className="w-20 rounded-md backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950 p-4"
          >
            Home
          </Link>
        </div>
        <div className="p-2">
          <Link
            href="../pages/schedule"
            className="w-20 rounded-md backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950 p-4"
          >
            Schedule
          </Link>
        </div>
        <div className="p-2">
          <Link
            href="../pages/dashboard"
            className="w-20 rounded-md backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950 p-4"
          >
            Book
          </Link>
        </div>
        <div className="p-2">
          <Link
            href="../pages/login"
            className="w-20 rounded-full backdrop-opacity-15 backdrop-invert bg-red-700 hover:bg-red-950 p-4"
          >
            logout
          </Link>
        </div>
      </div>
    </div>
  );
}
