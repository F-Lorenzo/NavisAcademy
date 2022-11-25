import React from 'react'
import { UserAuth } from '../../../Context/AuthContext';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import NextClass from './NextClass';

const MyNextClass = ({myClasses=[]}) => {
    
    return (
        
        <NextClass myClass={myClasses} />
        
    )

}

export default MyNextClass
