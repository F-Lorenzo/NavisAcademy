import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs } from 'firebase/firestore';
import Loader from '../../Loader/Loader';

const CreateTeacher = () => {

    const { createUser } = UserAuth();
    const [ loader, setLoader ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
 
        try {
            const infoUser = await createUser(form.email, form.password).then((firebaseData) => {
                return firebaseData;
            });
            const firestore = getFirestore();
            const newTeacher = doc(firestore, `Users/${infoUser.user.uid}`);
            setDoc(newTeacher, {...form, ...teacherClassesData});

            navigate('/account');
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }
    };

    if (loader) {
        return <Loader />
    }

    return (
        <div>
            <h5>NUEVO PROFESOR CREADO</h5>
        </div>
    )

}

export default CreateTeacher

