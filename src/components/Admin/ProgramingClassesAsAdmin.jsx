import React, { useState, useEffect }  from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Classes from './Classes';


const ProgramingClassesAsAdmin = () => {

    const [ data, setData ] = useState([]);
    const [ teachers, setTeachers ] = useState([]);

    useEffect( () => {

        const querydb = getFirestore();
        const queryCollection = collection (querydb, `Classes`);
        getDocs(queryCollection)
        .then( res => setData( 
            res.docs.map( 
                date => ({
                    id: date.id,
                    ...date.data()
                })
            ) 
            )
        )

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

    }, [])


    return (
        <div>
            <h1>
                CLASES PROGRAMADAS
            </h1>
            <Classes classDate={data} teachers={teachers} />

        </div>
    )

}

export default ProgramingClassesAsAdmin
