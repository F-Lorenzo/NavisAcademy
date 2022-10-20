import React from 'react'
import { UserAuth } from '../../../Context/AuthContext';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import NextClass from './NextClass';

const MyNextClass = ({myClasses=[]}) => {

    myClasses.sort((a,b) => {
        if (a.date < b.date) {return - 1;}
        if (a.date > b.date) {return 1;}
        return 0;
    })

    console.log(myClasses);

    
    return (
        
        <NextClass myClass={myClasses} />
        
    )

}

export default MyNextClass
