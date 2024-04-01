"use client";
import Home from "./components/loginAndSignin/loginAndsignin";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-black">WELLCOME</div>
      </div>

      <Home />
    </>
  );
}
