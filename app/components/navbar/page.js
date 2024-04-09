"use client";
import { UserContext } from "@/app/state/user-context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const { user } = useContext(UserContext);
  // const user = {
  //   user_name: "Guest",
  //   email: "guest@example.com",
  // };

  return (
    <div className="backdrop-opacity-15 backdrop-invert bg-rgb(122 155 152) text-white p-4 rounded-b-lg fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <span className="font-bold">Welcome, {user.user_name}</span>
        </div>
        <div>
          <span className="mr-4">{user.email}</span>
          {/* Add more user information or navigation links as needed */}
          {/* Example navigation link */}
          <button
            className="text-white hover:text-gray-200"
            onClick={() => router.push("/")}
          >
            My Account
          </button>
        </div>
      </div>
    </div>
  );
}
