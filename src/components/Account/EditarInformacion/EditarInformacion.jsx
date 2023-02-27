import React, { useState } from 'react';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

import { EditItems } from './EditItems';
import { UserAuth } from '../../../Context/AuthContext';
import { UserUpdates } from '../../../Context/UserUpdatesContext';

import Loader from '../../Loader/Loader';
import './EditarInformacion.scss';

const EditarInformacion = () => {

    const { userLogged } = UserAuth();
    const { user } = UserUpdates();
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const userData = user.form;

    let dataForUser = ({});
    let dataForOthers = ({});


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
        /*
        console.log(form);
        */
    }

    const generateForm = () => {
        for (let prop in form) {
            if (form[prop] !== "") {
                switch (prop) {
                    case "name":
                        dataForUser = {...dataForUser, name: form[prop]};
                        dataForOthers = {...dataForOthers, studentName:form[prop]};
                    break;
                    case "lastName":
                        dataForUser = {...dataForUser, lastName: form[prop]};
                        dataForOthers = {...dataForOthers, studentLastName:form[prop]};
                    break;
                    case "city":
                        dataForUser = {...dataForUser, city: form[prop]};
                        dataForOthers = {...dataForOthers, studentCity:form[prop]};
                    break;
                    case "phoneNumber":
                        dataForUser = {...dataForUser, phoneNumber: form[prop]};
                        dataForOthers = {...dataForOthers, studentPhoneNumber:form[prop]};
                    break;
                    default:
                    break;
                }
            }
            /*
            console.log({prop, dataForUser, dataForOthers, userData});
            */
        }
    }

    const handleSubmit = async (e) => {
        /* 
        */
        e.preventDefault();
        setLoader(true);
        generateForm();

        try {
            const firestore = getFirestore();
            const userToEdit = doc(firestore, `Users/${userLogged.uid}`);
            await updateDoc(userToEdit, {
                ...dataForUser
            });

            if (userData.role === "alumn" && userData.teacher === "assigned") {
                const userClasses = doc(firestore, `Users/${userLogged.uid}/myClasses/${userData.myClassesId}`);
                await updateDoc(userClasses, {
                    ...dataForOthers
                });
                const globalClassesData = doc(firestore, `Classes/${userData.myClassesId}`);
                await updateDoc(globalClassesData, {
                    ...dataForOthers
                });
                const myTeacherData = doc(firestore, `Users/${userData.teacherUid}/myStudents/${userLogged.uid}`);
                await updateDoc(myTeacherData, {
                    ...dataForOthers
                });
            }

            setLoader(false);
            swal("Muy Bien!", "Actualización exitosa", "success");
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }

    }

    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div className='editarInfo-container'>
            <h5>EDITAR MI INFORMACION</h5>

            <div>             
                <div>

                    <form className='editarInfo__form' onSubmit={handleSubmit}>

                        {EditItems.map((item, index) =>{
                            return (
                                <div key={index}>
                                    <label htmlFor={item.inNameId}>
                                        {item.field} : 
                                    </label>
                                    <input 
                                        type={item.inType} 
                                        id={item.inNameId} 
                                        name={item.inNameId} 
                                        value={form[item.inNameId] || ''} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            )
                        })}

                        <button className='editarInfo-button' type="submit">Editar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarInformacion
