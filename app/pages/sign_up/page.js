"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setSignupError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          email: email,
          passWord: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign up failed");
      }

      router.push("/pages/login");
      alert("Sign up successful");
    } catch (error) {
      setSignupError("Sign up failed. Please try again.");
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
            SIGN UP
          </h2>
          {signupError && (
            <p className="mt-2 text-center text-sm text-red-600">
              {signupError}
            </p>
          )}
        </div>
        <form
          className="mt-8 space-y-6 bg-transparent/30 p-16 rounded-xl"
          onSubmit={handleSignUp}
        >
          <div className="rounded-md shadow-sm space-y-6">
            <div>
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
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-green-950/30 focus:z-10 sm:text-sm bg-transparent placeholder-gray-700"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div>
              <label htmlFor="retypePassword" className="sr-only">
                Retype Password
              </label>
              <input
                id="retypePassword"
                name="retypePassword"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-green-950/30 focus:z-10 sm:text-sm bg-transparent placeholder-gray-700"
                placeholder="Retype Password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-green-950 hover:bg-green-950/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
            <div className="text-center text-white mt-5 flex align-middle justify-center">
              <h1>
                Already have an account?{" "}
                <a className="underline" href="/pages/login">
                  Login
                </a>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
