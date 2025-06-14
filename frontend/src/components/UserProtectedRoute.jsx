// File: components/UserProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.role !== "user") {
      return <Navigate to="/login" replace />;
    }

    return children;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return <Navigate to="/login" replace />;
  }
};

export default UserProtectedRoute;
