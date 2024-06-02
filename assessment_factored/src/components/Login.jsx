import React, { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { Navigate } from "react-router-dom";

function Login() {
  const { login, isLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage:
          "url('/abstract-black-hexagonal-geometric-layered.jpg')",
      }}
    >
      <div className="w-full max-w-md p-4 rounded-md shadow-sm bg-white bg-opacity-90">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="./logo-factored.png" className="h-16" alt="factored" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="show-password"
              className="ml-2 block text-sm text-gray-900"
            >
              Show Password
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-center text-base font-medium text-gray-400">
        If you lose your password, contact support
      </p>
    </div>
  );
}

export default Login;
