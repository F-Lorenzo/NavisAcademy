import React, { useState } from 'react';
import { getFirestore, updateDoc, doc, getDoc, collection, getDocs } from 'firebase/firestore';

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
                        if (userData.role === "alumn") {
                            dataForOthers = {...dataForOthers, studentName:form[prop]};
                        }
                        if (userData.role === "teacher") {
                            dataForOthers = {...dataForOthers, teacherName:form[prop]};
                        }
                    break;
                    case "lastName":
                        dataForUser = {...dataForUser, lastName: form[prop]};
                        if (userData.role === "alumn") {
                            dataForOthers = {...dataForOthers, studentLastName:form[prop]};
                        }
                        if (userData.role === "teacher") {
                            dataForOthers = {...dataForOthers, teacherLastName:form[prop]};
                        }
                    break;
                    case "city":
                        dataForUser = {...dataForUser, city: form[prop]};
                        if (userData.role === "alumn") {
                            dataForOthers = {...dataForOthers, studentCity:form[prop]};
                        }
                        if (userData.role === "teacher") {
                            dataForOthers = {...dataForOthers, teacherCity:form[prop]};
                        }
                    break;
                    case "phoneNumber":
                        dataForUser = {...dataForUser, phoneNumber: form[prop]};
                        if (userData.role === "alumn") {
                            dataForOthers = {...dataForOthers, studentPhoneNumber:form[prop]};
                        }
                        if (userData.role === "teacher") {
                            dataForOthers = {...dataForOthers, teacherPhoneNumber:form[prop]};
                        }
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

            const updForStudents = async (studentId) => {
                const studentsPath = doc(firestore, `Classes/${studentId}`);
                await updateDoc(studentsPath, {
                    ...dataForOthers,
                    modification: true,
                }) 
            }

            if (userData.role === "teacher") {
                const myStudentsPath = collection(firestore, `Users/${userLogged.uid}/myStudents`); 
                const myStudentsColletction = await getDocs(myStudentsPath);
                myStudentsColletction.forEach(doc => {
                    updForStudents(doc.id);
                });
            }

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
                const userSchedulePath = doc(firestore, `Users/${userLogged.uid}/mySchedule/${userLogged.uid}`);
                const teacherSchedulePath = doc(firestore, `Users/${userData.teacherUid}/mySchedule/${userLogged.uid}`);
                const teacherScheduleData = await getDoc(teacherSchedulePath);
                const teacherSchedule = teacherScheduleData.data();
                
                //console.log({teacherSchedule, dataForOthers});

                for (let prop in dataForOthers) {
                    if (dataForOthers[prop] !== "") {
                        switch (prop) {
                            case "studentName":
                                for (const student in teacherSchedule) {
                                    teacherSchedule[student].studentName = dataForOthers[prop];
                                    console.log(`${student}: ${teacherSchedule[student].studentName}`);
                                }
                            break;
                            case "studentLastName":
                                for (const student in teacherSchedule) {
                                    teacherSchedule[student].studentLastName = dataForOthers[prop];
                                    console.log(`${student}: ${teacherSchedule[student].studentLastName}`);
                                }
                            break;
                            default:
                            break;
                        }
                    }
                }

                await updateDoc (userSchedulePath, {
                    ...teacherSchedule,
                });

                await updateDoc (teacherSchedulePath, {
                    ...teacherSchedule,
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
