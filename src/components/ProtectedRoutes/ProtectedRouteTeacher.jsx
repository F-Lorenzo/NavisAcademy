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
    return (
        <h1>NOT A TEACHER ACOUNT</h1>
    )
  } else {
      return children;
  }

};

export default ProtectedRouteTeacher;