import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { UserAuth } from '../../../Context/AuthContext';
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import Students from './Students';

const MyStudents = () => {

    const { user } = UserUpdates();
    const [ studentsData, setStudentsData ] = useState([]);

    useEffect( () => {

        const querydb = getFirestore();
        const queryCollection = collection (querydb, `Users/${user.uid}/myStudents`);
        getDocs(queryCollection)
        .then( res => setStudentsData( 
            res.docs.map( 
                student => ({
                    id: student.id,
                    ...student.data()
                })
            )
        ))

    }, [])

    return (
        <div>
            <h1>MY STUDENTS</h1>
            <Students myStudents={studentsData} />
        </div>
    )

}

export default MyStudents
