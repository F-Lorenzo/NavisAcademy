import React from 'react'
import { UserAuth } from "../../Context/AuthContext";
import { UserUpdates } from '../../Context/UserUpdatesContext';
import Admin from '../Admin/Admin';
import Loader from '../Loader/Loader';
import NewPanelAlumno from '../PanelAlumno/NewPanelAlumno';
import PanelProfessor from '../PanelProfessor/PanelProfessor';
import { Navigate } from 'react-router-dom';


const Panel = () => {

    const { user } = UserUpdates();


    return (
        <div>            
            { 
            user.role === "admin" ? ( <Admin /> )
            : user.role === "alumn" ? ( <NewPanelAlumno /> ) 
            : user.role === "teacher" ? ( <PanelProfessor /> )
            : <Loader />
            }
        </div>
    )
}

export default Panel
