import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If not logged in → redirect to /admin (login page)
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
