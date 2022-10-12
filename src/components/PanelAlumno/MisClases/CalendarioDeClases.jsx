import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import React from 'react'
import {useState,useEffect} from 'react';
import Loader from '../../Loader/Loader';

import { UserAuth } from '../../../Context/AuthContext';
import Class from './Class';



const CalendarioDeClases = () => {

    const { user } = UserAuth();
    const [ data, setData ] = useState([]);

    useEffect( () => {

        const querydb = getFirestore();
        const queryCollection = collection (querydb, `Users/${user.uid}/myClases`);
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

    }, [])

    return (
        <div>
            <h1>CALENDARIO DE CLASES</h1>
            <Class classDate={data} />
        </div>
    )
}

export default CalendarioDeClases
