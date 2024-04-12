"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/state/user-context";

const Login = () => {
  const router = useRouter();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      } else {
        const { data } = await response.json();
        if (!data) {
          throw new Error("Login failed");
        }
        setUser(data);
        router.push("/components/cpn");
      }
    } catch (error) {
      setLoginError("Invalid username or password");
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-image py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(/LSBG.jpg)`,
        minHeight: "100vh",
        backgroundColor: "#CBD5E0",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-950">
            Login
          </h2>
          {loginError && (
            <p className="mt-2 text-center text-sm text-red-600">
              {loginError}
            </p>
          )}
        </div>
        <form
          className="mt-8 space-y-6 bg-transparent/30 p-16 rounded-xl"
          onSubmit={handleLogin}
        >
          <div className="rounded-md shadow-sm-space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-green-950/30 focus:z-10 sm:text-sm bg-transparent placeholder-gray-700"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-green-950/30 focus:z-10 sm:text-sm bg-transparent placeholder-gray-700"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-green-950 hover:bg-green-950/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
            <div className="text-center text-white flex align-middle justify-center mt-4">
              <h1>
                dont have a account!{" "}
                <a className="underline" href="/pages/sign_up">
                  SIGN UP
                </a>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
