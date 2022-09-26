import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

import PerfilAlumno from '../PanelAlumno/PerfilAlumno';
import TeacherProfile from '../TeacherProfile/TeacherProfile';


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

  const handleEditarInformacion = () => {
    navigate('/Account/EditarInformacion');
  }

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <p>ROL DE USUARIO: {user.role}</p>

        {user.role === "alumn" ? <PerfilAlumno {...user.form} /> : <TeacherProfile {...user.form} /> }    
      
      <button onClick={handleEditarInformacion}>
        EDITAR INFORMACION
      </button>
      
      <button onClick={handleLogout}>
        Logout
      </button>
      
    </div>
  );
};

export default Account;