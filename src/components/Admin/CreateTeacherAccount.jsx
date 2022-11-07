import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs } from 'firebase/firestore';
import Loader from '../Loader/Loader'

const CreateTeacherAccount = () => {

    const { createUser } = UserAuth();
    const [ form, setForm ] = useState({role: "teacher"});
    const [ disponibility, setDisponibility ] = useState({});

    
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState('')
    const navigate = useNavigate();


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleDisponibility = (e) => {
        setDisponibility({
            ...disponibility,
            [e.target.name]:e.target.value,
        })
    }

    const teacherClassesData = {
        totalClasses: 0,
        remainingClasses: 0,
        thisMonthClasses: 0,
        lastMonthClasses: 0
    }

    const handleTest = () => {

    }

    const handleSubmit = async (e) => {
        let mySchedule = ({});
        e.preventDefault();
        setError('');
        setLoader(true);
 
        try {
            const infoUser = await createUser(form.email, form.password).then((firebaseData) => {
                return firebaseData;
            });
            console.log(infoUser); // BORRAR ESTA SHIT!!
            const firestore = getFirestore();
            const newTeacher = doc(firestore, `Users/${infoUser.user.uid}`);
            setDoc(newTeacher, {...form, disponibility, ...teacherClassesData});
            /*
            const teacherSchedule = doc(firestore, `Users/${infoUser.user.uid}/mySchedule/myClasses`);
            setDoc(teacherSchedule, "");
            */

            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message); // BORRAR ESTA SHIT!!
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }
    };

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <>
        <button onClick={handleTest}>test</button>
        <div className="caja__trasera">             
            <div className="caja__trasera-login">

                <form className='form__Register' onSubmit={handleSubmit}>

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

                    <label htmlFor="password">
                        Password : 
                    </label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={form.password || ''} 
                        onChange={handleChange} 
                    />

                    <label htmlFor="email">
                        Email : 
                    </label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        value={form.email || ''} 
                        onChange={handleChange} 
                    />

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

                    <label htmlFor="rangoHorarioDeClase">
                        Lunes horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='lunesStart' 
                        name='lunesStart' 
                        value={disponibility.lunesStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Lunes horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='lunesEnd' 
                        name='lunesEnd' 
                        value={disponibility.lunesEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Martes horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='martesStart' 
                        name='martesStart' 
                        value={disponibility.martesStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Martes horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='martesEnd' 
                        name='martesEnd' 
                        value={disponibility.martesEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Miercoles horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='miercolesStart' 
                        name='miercolesStart' 
                        value={disponibility.miercolesStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Miercoles horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='miercolesEnd' 
                        name='miercolesEnd' 
                        value={disponibility.miercolesEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Jueves horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='juevesStart' 
                        name='juevesStart' 
                        value={disponibility.juevesStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Jueves horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='juevesEnd' 
                        name='juevesEnd' 
                        value={disponibility.juevesEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Viernes horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='viernesStart' 
                        name='viernesStart' 
                        value={disponibility.viernesStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Viernes horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='viernesEnd' 
                        name='viernesEnd' 
                        value={disponibility.viernesEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Sabado horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='sabadoStart' 
                        name='sabadoStart' 
                        value={disponibility.sabadoStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Sabado horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='sabadoEnd' 
                        name='sabadoEnd' 
                        value={disponibility.sabadoEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Domingo horario de inicio:
                    </label>
                    <input
                        type="time" 
                        id='domingoStart' 
                        name='domingoStart' 
                        value={disponibility.domingoStart || ''} 
                        onChange={handleDisponibility} 
                    />

                    <label htmlFor="rangoHorarioDeClase">
                        Domingo horario de finalizacion:
                    </label>
                    <input
                        type="time" 
                        id='domingoEnd' 
                        name='domingoEnd' 
                        value={disponibility.domingoEnd || ''} 
                        onChange={handleDisponibility} 
                    />

                    <button className='boton__Edit' type="submit" id="btn__iniciar-sesion">Crear Cuenta</button>

                </form>
            </div>
        </div>
        </>
  );

}

export default CreateTeacherAccount
