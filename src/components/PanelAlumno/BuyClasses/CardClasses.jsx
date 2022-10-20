import React from 'react'
import { UserAuth } from '../../../Context/AuthContext';
import { getFirestore, doc, increment, updateDoc } from 'firebase/firestore';
import Checkout from '../../checkout/Checkout';
import {useNavigate} from 'react-router-dom'

const CardClasses = ({number,price,duration,amount,includes}) => {
    const { user } = UserAuth();
    const navigate = useNavigate();
    <Checkout price={price} amount={amount} />
    const handleBuyNow = async () => {
        console.log("buyNow");
        navigate("/Checkout");
        try {
            const firestore = getFirestore();
            const userClases = doc(firestore, `Users/${user.uid}`);
            console.log(userClases);
            await updateDoc(userClases, {
                remainingClases: increment(amount),
            });
                swal("Muy Bien", `Adquiriste ${amount} nuevas clases`, "success");
        } catch (e) {
            swal("UPS!", `${e.message}`, "error");
            }
    }
  };


    return (
    <div>
        <div className='buy-card'>

            <ul>
                <li>Pack Nº : {number} </li>
                <li>Price : {price} USD/Class </li>
                <li>Amount of Classes : {amount} </li>
                <li>Duration of Class : {duration} min/Class </li>
                <li>Includes in Class : {includes} </li>
                <div>
                  <button className='button__Card' onClick={handleBuyNow}>BUY NOW</button>
                </div>
            </ul>
        </div>
    </div>
  );
};

export default CardClasses;
