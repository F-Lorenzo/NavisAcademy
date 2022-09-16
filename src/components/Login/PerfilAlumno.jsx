import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import Loader from '../Loader';

const PerfilAlumno = ({alumnId}) => {

    const [ studentData, setStudentData ] = useState({});
    const [ studentId, setStudentId ] = useState (alumnId);

    const [ loader, setLoader ] = useState(false);

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Users', studentId);
        setLoader(true);
        getDoc(queryDoc)
            .then( res => {
                setStudentData({id: res.id, ...res.data()});
                console.log(studentData);
                setLoader(false);
            },);

    }, [studentId])

    if (loader) {

        return (
            <Loader />
        )

    } else {

        return (
            <div>
                PerfilAlumno: {studentId}
                <br />
                Nombre: {studentData.form.nombre}
                <br />
                Apellido: {studentData.form.apellido}
                <br />
                Pais: {studentData.form.pais}
                <br />
                Ciudad: {studentData.form.ciudad}
                <br />
                Telefono: {studentData.form.telefono}
                <br />
                Email: {studentData.form.email}
            </div>
        )
    }

}

export default PerfilAlumno
