import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const ProtectedRouteTeacher = ({ children }) => {
  const { user } = UserAuth();
  
  if (!user) {
    return <Navigate to='/logger' />;
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