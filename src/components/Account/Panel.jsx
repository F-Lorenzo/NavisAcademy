import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { UserUpdates } from '../../Context/UserUpdatesContext';
const Loader = lazy(() => import('../Loader/Loader'))
const Admin = lazy(() => import('../Admin/Admin'));
const NewPanelAlumno = lazy(() => import('../PanelAlumno/NewPanelAlumno'));
const PanelProfessor = lazy(() => import('../PanelProfessor/PanelProfessor'));

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
