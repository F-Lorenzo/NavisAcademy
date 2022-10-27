import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { UserUpdates } from '../../Context/UserUpdatesContext';

const ProtectedRouteStudent = ({ children }) => {
  const { userLogged } = UserAuth();
  const { user } = UserUpdates();
  
  if (!userLogged) {
    return <Navigate to='/logger' />;
  }

  if (user.role === "teacher") {
    return (
        <h1>NOT A STUDENT ACOUNT</h1>
    )
  } else {
      return children;
  }

};

export default ProtectedRouteStudent;