import React from 'react'
import { UserAuth } from "../../Context/AuthContext";
import PanelAlumno from '../PanelAlumno/PanelAlumno';
import PanelProfessor from '../PanelProfessor/PanelProfessor';


const Panel = () => {

    const { user } = UserAuth();


    return (
        <div>            
            {user.role === "alumn" ? (
                <PanelAlumno />
            ) : (
                <PanelProfessor />
            )}
        </div>
    )
}

export default Panel
