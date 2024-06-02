import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [error, setError] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const login = async (username, password) => {
    try {
      const response = await fetch(`${backendUrl}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setUserId(data.UserId);
        setIsLoggedIn(true);
      } else {
        throw new Error("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setError(error.message);
      alert("Error: " + error.message);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
