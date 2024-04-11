"use client";
import { UserContext } from "@/app/state/user-context";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="bg-green-950/30 text-white fixed top-0 py-3 rounded-b-lg w-full justify-between px-6 flex h-16">
      <div>
        <span className="font-bold">{user.user_name}</span>
      </div>
      {/* <div className="flex items-center mx-auto h-10 w-1/2 rounded-full bg-green-950/30 p-2 pl-4">
        <img
          src="/buttons/search.jpg"
          className="backdrop-opacity-15 backdrop-inverth-8 w-8 mr-2"
        />
        <input
          className="border-none text-white focus:outline-none placeholder-white::placeholder
              rounded-full
              p-2
              bg-transparent"
          style={{ maxWidth: "100%" }}
          placeholder="Search..."
        />
      </div> */}
      <div className="flex justify-center items-center mr-4 relative text-center">
        <div className="w-9 h-9 rounded-lg">
          {" "}
          <button
            className=" bg-green-950/30 backdrop-opacity-15 backdrop-invert rounded-lg"
            onClick={handleDropdownToggle}
          >
            <img className="lg:hidden w-9 h-9 rounded-lg" src="/h.png"></img>
          </button>
        </div>
        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="lg:hidden absolute top-full mt-4  bg-green-950/30 rounded-md shadow-lg ">
            <Link
              href="../components/cpn"
              className="block w-full p-2 hover:bg-950"
            >
              Home
            </Link>
            <Link
              href="../pages/schedule"
              className="block w-full p-2 hover:bg-950"
            >
              Schedule
            </Link>
            <Link
              href="../pages/dashboard"
              className="block w-full p-2 hover:bg-950"
            >
              Book
            </Link>
            <Link
              href="../pages/login"
              className="block w-full p-2 hover:bg-950"
            >
              Logout
            </Link>
          </div>
        )}
        {/* Other menu items */}
        <div className="hidden lg:flex space-x-2 text-center ">
          <Link
            href="../components/cpn"
            className="w-20 rounded-md backdrop-opacity-15 pt-2 backdrop-invert bg-green-950/30 hover:bg-green-950 h-10"
          >
            Home
          </Link>
          <Link
            href="../pages/schedule"
            className="w-20 rounded-md backdrop-opacity-15 pt-2 backdrop-invert bg-green-950/30 hover:bg-green-950 h-10"
          >
            Schedule
          </Link>
          <Link
            href="../pages/dashboard"
            className="w-20 rounded-md backdrop-opacity-15 pt-2 backdrop-invert bg-green-950/30 hover:bg-green-950 h-10"
          >
            Book
          </Link>

          <Link
            href="../pages/login"
            className=" w-9 h-9 rounded-full backdrop-opacity-15  backdrop-invert"
          >
            <button>
              <img className="w-fit h-fit rounded-lg" src="/P.png"></img>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
