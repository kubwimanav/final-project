// utils/auth.js
export const AuthUtils = {
  // Set authentication data
  setAuthData: (token, userRole, userEmail, rememberMe = false) => {
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("authToken", token);
    storage.setItem("userRole", userRole);
    storage.setItem("userEmail", userEmail);
    storage.setItem("loginTime", new Date().getTime().toString());
  },

  // Get authentication data
  getAuthData: () => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const userRole =
      localStorage.getItem("userRole") || sessionStorage.getItem("userRole");
    const userEmail =
      localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
    const loginTime =
      localStorage.getItem("loginTime") || sessionStorage.getItem("loginTime");

    return {
      token,
      userRole,
      userEmail,
      loginTime: loginTime ? parseInt(loginTime) : null,
    };
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const { token } = AuthUtils.getAuthData();
    return !!token;
  },

  // Check if user is admin
  isAdmin: () => {
    const { token, userRole } = AuthUtils.getAuthData();
    return !!(token && userRole === "admin");
  },

  // Check if user is regular user
  isUser: () => {
    const { token, userRole } = AuthUtils.getAuthData();
    return !!(token && userRole === "user");
  },

  // Clear authentication data (logout)
  clearAuthData: () => {
    // Clear from both localStorage and sessionStorage
    ["authToken", "userRole", "userEmail", "loginTime"].forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  },

  // Check if session is expired (24 hours)
  isSessionExpired: () => {
    const { loginTime } = AuthUtils.getAuthData();
    if (!loginTime) return true;

    const now = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    return now - loginTime > twentyFourHours;
  },

  // Get redirect path based on user role
  getRedirectPath: () => {
    const { userRole } = AuthUtils.getAuthData();

    if (userRole === "admin") {
      return "/admin";
    } else if (userRole === "user") {
      return "/userdash";
    }

    return "/";
  },

  // Refresh auth data (extend session)
  refreshSession: () => {
    const { token, userRole, userEmail } = AuthUtils.getAuthData();

    if (token && userRole && userEmail) {
      // Determine storage type based on where token is currently stored
      const useLocalStorage = !!localStorage.getItem("authToken");
      AuthUtils.setAuthData(token, userRole, userEmail, useLocalStorage);
      return true;
    }

    return false;
  },
};

// Hook for using auth in React components
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isAdmin: false,
    isUser: false,
    userEmail: null,
    loading: true,
  });

  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = AuthUtils.getAuthData();

        // Check if session is expired
        if (AuthUtils.isSessionExpired()) {
          AuthUtils.clearAuthData();
          setAuthState({
            isAuthenticated: false,
            isAdmin: false,
            isUser: false,
            userEmail: null,
            loading: false,
          });
          return;
        }

        setAuthState({
          isAuthenticated: AuthUtils.isAuthenticated(),
          isAdmin: AuthUtils.isAdmin(),
          isUser: AuthUtils.isUser(),
          userEmail: authData.userEmail,
          loading: false,
        });
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAuthState({
          isAuthenticated: false,
          isAdmin: false,
          isUser: false,
          userEmail: null,
          loading: false,
        });
      }
    };

    checkAuth();

    // Optional: Set up interval to check auth status periodically
    const interval = setInterval(checkAuth, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const login = (token, userRole, userEmail, rememberMe = false) => {
    AuthUtils.setAuthData(token, userRole, userEmail, rememberMe);
    setAuthState({
      isAuthenticated: true,
      isAdmin: userRole === "admin",
      isUser: userRole === "user",
      userEmail: userEmail,
      loading: false,
    });
  };

  const logout = () => {
    AuthUtils.clearAuthData();
    setAuthState({
      isAuthenticated: false,
      isAdmin: false,
      isUser: false,
      userEmail: null,
      loading: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
    refreshSession: AuthUtils.refreshSession,
    getRedirectPath: AuthUtils.getRedirectPath,
  };
};
