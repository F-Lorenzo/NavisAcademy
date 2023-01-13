import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { UserUpdates } from '../../Context/UserUpdatesContext';

const ProtectedRouteTeacher = ({ children }) => {
  
  const { userLogged } = UserAuth();
  const { user } = UserUpdates();
  
  if (!userLogged) {
    return <Navigate to='/signIn' />;
  }

  if (user.role === "alumn") {
    return <Navigate to='/' />;
  } else {
      return children;
  }

};

export default ProtectedRouteTeacher;