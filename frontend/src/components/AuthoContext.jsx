// AuthContext.js - Create this file in your src folder
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      // Check for your existing token and user data
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("loggedUser");

      if (token && userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData, token, rememberMe = false) => {
    // Store token and user data (matching your existing structure)
    localStorage.setItem("token", token);
    localStorage.setItem("loggedUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null && localStorage.getItem("token") !== null;
  };

  const isAdmin = () => {
    return user && user.role === "admin";
  };

  const isUser = () => {
    return user && (user.role === "user" || user.role !== "admin");
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    isUser,
    getToken,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
