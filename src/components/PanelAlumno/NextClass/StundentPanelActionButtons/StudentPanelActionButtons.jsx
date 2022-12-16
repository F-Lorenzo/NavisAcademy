import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentPanelActionButtons = () => {

    const navigate = useNavigate();

    const handleReprogramClass = () => {
        swal("Muy Bien", `Aqui podras reprogramar tu clase`, "success");
        navigate("/Account/ReprogramClass");
    }

    return (
        <div className='studentPanelActionButtons'>
            <button className='studentPanelButton'>INICIAR CLASE</button>
            <a href="https://www.blinklearning.com/v/1666102044/themes/tmpux/launch.php">
                <button className='studentPanelButton'>BLINK LEARNING</button>
            </a>
            <button className='studentPanelButton' onClick={handleReprogramClass}>REPROGRAMAR CLASE</button>
        </div>
    )

}

export default StudentPanelActionButtons
