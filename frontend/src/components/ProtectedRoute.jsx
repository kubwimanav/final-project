import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false, userOnly = false }) => {
  const location = useLocation();

  // Not logged in
  if (!AuthService.isAuthenticated()) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
          message: "Please login to access this page",
        }}
        replace
      />
    );
  }

  const user = AuthService.getCurrentUser();

  // Admin-only route
  if (adminOnly && user?.role !== "admin") {
    return <AccessDenied isAdmin={true} />;
  }

  // User-only route
  if (userOnly && user?.role === "admin") {
    return <AccessDenied />;
  }

  return children;
};
export default ProtectedRoute;
