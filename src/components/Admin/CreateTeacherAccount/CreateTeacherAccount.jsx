import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { FormItems } from './FormItems';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs } from 'firebase/firestore';
import SetTeacherDisponobility from './SetTeacherDisponobility';
import './CreateTeacherAccount.scss'

const CreateTeacherAccount = () => {

    const [ form, setForm ] = useState({ 
        role: "teacher", totalClasses: 0,
        remainingClasses: 0,
        thisMonthClasses: 0,
        lastMonthClasses: 0
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <>
        <div className='createTeacher-container'>             
            <div>

                <form className='createTeacher__form'>

                    {FormItems.map((item, index) => {
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
                        </div >
                        )
                    })}

                </form>
            </div>
            <SetTeacherDisponobility teacherForm={form}/>
        </div>
        </>
    );

}

export default CreateTeacherAccount
