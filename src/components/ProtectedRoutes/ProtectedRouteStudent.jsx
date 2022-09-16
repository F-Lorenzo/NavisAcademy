import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const ProtectedRouteStudent = ({ children }) => {
  const { user } = UserAuth();
  
  if (!user) {
    return <Navigate to='/logger' />;
  }

  if (user.rol === "teacher") {
    return (
        <h1>NOT A STUDENT ACOUNT</h1>
    )
  } else {
      return children;
  }

};

export default ProtectedRouteStudent;