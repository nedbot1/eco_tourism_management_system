"use client";
import { UserContext } from "@/app/state/user-context";
import { useContext } from "react";

export default function Navbar() {
  // const { user } = useContext(UserContext);
  const user = {
    user_name: "Guest",
    email: "guest@example.com",
  };

  const currentUser = user || dummyUser;

  return (
    <div className="bg-cyan-950 text-white p-4 rounded-b-lg">
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
