import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import TeacherProfile from "../PanelProfessor/TeacherProfile";
import PerfilAlumno from "../PanelAlumno/PerfilAlumno";
import perfil from "../../assets/img/perfil.jpg";

const Account = () => {
  const { userLogged, logOut } = UserAuth();
  const { user } = UserUpdates();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/logger");
      swal("BYE!", `sesion Finalizada!`, "success");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleEditarInformacion = () => {
    navigate("/Account/EditarInformacion");
  };

  return (
    <div className="section_Profile_Account">
      <div className="section_Profile_Content">
        <h1 className="account__Pic">
          <img src={perfil} alt={""} />
        </h1>
        <h1 className="account__Title">Account</h1>
        <p className="profile-card__txt">User Email: {user && user.email}</p>
        <p className="profile-card__txt">ROL DE USUARIO: {user.role}</p>

        {user.role === "alumn" ? (
          <PerfilAlumno {...user.form} />
        ) : (
          <TeacherProfile {...user.form} />
        )}

        <div className="foo_Profile_Button">
          <button className="foo_Profile_Button_edit" onClick={handleEditarInformacion}>
            EDITAR INFORMACION
          </button>

          <button className="foo_Profile_Button_Logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
