import React, { useState } from 'react';
import { UserAuth } from '../../Context/AuthContext';
import PerfilAlumno from '../PanelAlumno/PerfilAlumno';



const EditarInformacion = () => {
    const { user } = UserAuth();

    const [ form, setForm ] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
        console.log(form);
    }

    const handleSubmit = () => {
        console.log(form);
    }

    return (
        <div>
            <h1>EDITAR INFO DE USUARIO</h1>
                {user.role === "alumn" ? <PerfilAlumno {...user.form} /> : <TeacherProfile {...user.form} /> }

                <div className="caja__trasera">             
            <div className="caja__trasera-login">

                 <form onSubmit={handleSubmit}>

                 <label htmlFor="name">
                        Name : 
                    </label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        value={form.name || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="lastName">
                        Last name : 
                    </label>
                    <input 
                        type="text" 
                        id='lastName' 
                        name='lastName' 
                        value={form.lastName || ''} 
                        onChange={handleChange} 
                    />
                    
                    <br />

                    <label htmlFor="phoneNumber">
                        Phone Number : 
                    </label>
                    <input 
                        type="tel" 
                        id='phoneNumber' 
                        name='phoneNumber' 
                        value={form.phoneNumber || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="country">
                        Country: 
                    </label>
                    <input 
                        type="text" 
                        id='country' 
                        name='country' 
                        value={form.country || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <label htmlFor="city">
                        City: 
                    </label>
                    <input 
                        type="text" 
                        id='city' 
                        name='city' 
                        value={form.city || ''} 
                        onChange={handleChange} 
                    />

                    <br />

                    <button type="submit" id="btn__iniciar-sesion">Editar</button>

                </form>
            </div>
        </div>
        </div>
    )
}

export default EditarInformacion
