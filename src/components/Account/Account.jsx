import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import TeacherProfile from "../PanelProfessor/TeacherProfile";
import PerfilAlumno from "../PanelAlumno/PerfilAlumno";
import Loader from "../Loader/Loader";


const Account = () => {
  const { user } = UserUpdates();
  const navigate = useNavigate();

  const userInfo = user.form;

  const handleEditarInformacion = () => {
    navigate("/Account/EditarInformacion");
  };

  const handleTest = () => {
    console.log(userInfo);
  }

  if(!userInfo) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="mainProfile-container">
        <div className="asideProfile-container">
  
          <div className="userCard-header_container">
  
            <div className="userCard-header">
  
              <div className="user-avatar">
                <i className="fa-solid fa-user fa-3x"></i>
              </div>
  
              <div className="userMain-info">
                <p>{userInfo.name} {userInfo.lastName}</p>
                <span>
                  {user.role === 'alumn' ? 'Estudiante' 
                  : 'Profesor'}
                </span>
              </div>
  
            </div>
  
          </div>
  
          <div className="userCard-body">
  
            <div className="userCard-body-input">
              <span className="userCard-body-input_title">Mail:</span>
              <span className="userCard-body-input_content">{user.email}</span> 
            </div>
            
          </div>
  
          <div className="userCard-body">
          
            <div className="userCard-body-input">
              <span className="userCard-body-input_title">Pais:</span>
              <span className="userCard-body-input_content">{userInfo.country}</span> 
            </div>
  
          </div>  
  
          <div className="userCard-footer">
            <button className="userCard-button" onClick={handleEditarInformacion}>
              Editar Perfil
            </button>
          </div>
  
        </div>
        {/*
        <button onClick={handleTest}>test</button>
        */}
      </div>
    );

  }
};

export default Account;
