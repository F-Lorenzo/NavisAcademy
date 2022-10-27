import React from 'react'
import { UserAuth } from "../../Context/AuthContext";
import { UserUpdates } from '../../Context/UserUpdatesContext';
import Loader from '../Loader/Loader';
import PanelAlumno from '../PanelAlumno/PanelAlumno';
import PanelProfessor from '../PanelProfessor/PanelProfessor';


const Panel = () => {

    const { user } = UserUpdates();


    return (
        <div>            
            { 
            user.role === "alumn" ? ( <PanelAlumno /> ) 
            : user.role === "teacher" ? ( <PanelProfessor /> )
            : <Loader />
            }
        </div>
    )
}

export default Panel
