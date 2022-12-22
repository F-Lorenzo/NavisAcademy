import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  
  const { userLogged } = UserAuth();
  
  if (!userLogged) {
    return <Navigate to='/signIn' />;
  }
  return children;

};

export default ProtectedRoute;