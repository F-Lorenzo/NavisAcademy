import React from 'react'
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { UserAuth } from '../../../../Context/AuthContext';
import MyClasses from './MyClasses';
import Loader from '../../../Loader/Loader';
import { DateTime } from 'luxon';

const AllMyClasses = () => {

    const { userLogged } = UserAuth();
    const [ myClassesData, setMyClassesData ] = useState ([]);
    const [ loader, setLoader ] = useState(false);
    
    useEffect( () => {

        setLoader(true);
        const querydb = getFirestore();
        const queryCollection = collection (querydb, `Users/${userLogged.uid}/myClases`);
        getDocs(queryCollection)
        .then( res => setMyClassesData(
            res.docs.map(
                classes => ({
                    id: classes.id,
                    ...classes.data()
                })
            )
        ))
        setLoader(false);

    }, [])

    if(loader) {
        return(
            <Loader />
        )
    } else {
        return (
            
            <div>
                <p>Mis Proximas Clases</p>
                <MyClasses myClasses={myClassesData} />
            </div>
        )
    }


}

export default AllMyClasses
