import React from 'react'
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { UserAuth } from '../../../../Context/AuthContext';
import MyClasses from './MyClasses';

const AllMyClasses = () => {

    const { user } = UserAuth();
    const [ myClassesData, setMyClassesData ] = useState ([]);
    
    useEffect( () => {

        const querydb = getFirestore();
        const queryCollection = collection (querydb, `Users/${user.uid}/myClases`);
        getDocs(queryCollection)
        .then( res => setMyClassesData(
            res.docs.map(
                classes => ({
                    id: classes.id,
                    ...classes.data()
                })
            )
        ))

    }, [])
    
    return (
        <div>
            <h1>ALL MY CLASSES</h1>
            <MyClasses myClasses={myClassesData} />
        </div>
    )

}

export default AllMyClasses
