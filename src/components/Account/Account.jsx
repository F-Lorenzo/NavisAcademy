import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

import PerfilAlumno from '../PanelAlumno/PerfilAlumno';
import PerfilProfesor from '../teacherProfile/PerfilProfesor';

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/logger');
      swal("BYE!", `sesion Finalizada!`, "success");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <p>ROL DE USUARIO: {user.rol}</p>

        {user.rol === "alumn" ? <PerfilAlumno {...user.form} /> : <PerfilProfesor {...user.form} /> }          

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Account;