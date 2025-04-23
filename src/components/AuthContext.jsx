import React, { createContext, useState, useEffect, useContext } from "react";
import api from "./Api"; // Make sure you have this set up

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkUserAuth(token);
    } else {
      setLoading(false);
    }
  }, []);

  const checkUserAuth = async (token) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get("/users/profile");
      setCurrentUser(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Authentication error:", err);
      localStorage.removeItem("token");
      setCurrentUser(null);
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setCurrentUser(user);
      return true;
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
      return false;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await api.post("/auth/register", userData);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setCurrentUser(user);
      return true;
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
    setCurrentUser(null);
  };

  const updateProfile = async (profileData) => {
    try {
      setError(null);
      const response = await api.put("/users/profile", profileData);
      setCurrentUser(response.data);
      return true;
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Profile update failed. Please try again."
      );
      return false;
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ✅ Export the custom hook
export const useAuth = () => useContext(AuthContext);
