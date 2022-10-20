import React from 'react'
import { useState } from 'react';
import { UserAuth } from '../../../Context/AuthContext';
import { getFirestore, doc, increment, updateDoc } from 'firebase/firestore';
import Tester from './Tester';


const CardClasses = (pack) => {

    const { user } = UserAuth();

    const handleBuyNow = async () => {
        /*
        console.log(pack);
        */
        try {
            const firestore = getFirestore();
            const userClases = doc(firestore, `Users/${user.uid}`);
            await updateDoc(userClases, {
                remainingClases: increment(pack.amount),
            });
                swal("Muy Bien", `Adquiriste ${pack.amount} nuevas clases`, "success");
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            }
    }

    return (

        <div className='buy-card'>

            <ul>
                <li>Pack Nº : {pack.number} </li>
                <li>Price : {pack.price} USD/Class </li>
                <li>Amount of Classes : {pack.amount} </li>
                <li>Duration of Class : {pack.duration} min/Class </li>
                <li>Includes in Class : {pack.includes} </li>
                <div>
                    <button className='button__Card' onClick={handleBuyNow}>BUY NOW</button>
                </div>
            </ul>
      
        </div>

    )

}

export default CardClasses
