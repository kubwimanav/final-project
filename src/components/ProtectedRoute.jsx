import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Spinner from './Spinner';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !currentUser.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;