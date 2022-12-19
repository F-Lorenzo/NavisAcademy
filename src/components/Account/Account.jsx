import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import Loader from "../Loader/Loader";
import UserCard from "./UserCard/UserCard";
import EditarInformacion from './EditarInformacion/EditarInformacion';
import UserInfo from "./UserInfo/UserInfo";

import "./Account.css";


const Account = () => {
  const { user } = UserUpdates();
  const navigate = useNavigate();
  const [ showEdit, setShowEdit ] = useState(false);

  const userInfo = user.form;

  const handleTest = () => {
    console.log(userInfo);
  }

  const editInfo = () => {
    setShowEdit(!showEdit);
  }

  if(!userInfo) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="mainProfile-container">
        <UserCard userInfo={userInfo} role={user.role} toggle={editInfo}/>
        {
          showEdit && <EditarInformacion />
        }
        {/*
        <button onClick={handleTest}>test</button>
        <UserInfo />
        */}
      </div>
    );

  }
};

export default Account;
