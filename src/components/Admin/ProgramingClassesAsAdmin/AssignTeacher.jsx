import React, { useState, useEffect }  from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Classes from './Classes';
import Loader from '../../Loader/Loader';


const AssignTeacher = () => {

    const [ data, setData ] = useState([]);
    const [ teachers, setTeachers ] = useState([]);
    const [ loader, setLoader ] = useState(true);

    useEffect(() => {

        const querydb = getFirestore();
        const classesCollection = collection (querydb, `Classes`);
        const classes = query(classesCollection, where('teacher', '==', 'unasigned'));
        getDocs(classes)
        .then( res => setData( 
            res.docs.map( 
                date => ({
                    id: date.id,
                    ...date.data()
                })
            ) 
        ))

        const allUsers = collection (querydb, `Users`);
        const onlyTeachers = query(allUsers, where('role', '==', 'teacher'));
        getDocs(onlyTeachers)
        .then ( res => setTeachers(
            res.docs.map(
                teacher => ({
                    id: teacher.id,
                    ...teacher.data()
                })
            )
        ))

        setLoader(false);

    }, [])


    return (
        <>
        { loader ? <Loader /> :
            <div>
                <Classes classDate={data} teachers={teachers} />
            </div>
        }
        </>
    )
    
}

export default AssignTeacher
