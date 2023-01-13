import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { UserUpdates } from '../../Context/UserUpdatesContext';

const ProtectedRouteStudent = ({ children }) => {
  
  const { userLogged } = UserAuth();
  const { user } = UserUpdates();
  
  if (!userLogged) {
    return <Navigate to='/signIn' />;
  }

  if (user.role === "teacher") {
    return <Navigate to='/' />;
  } else {
      return children;
  }

};

export default ProtectedRouteStudent;