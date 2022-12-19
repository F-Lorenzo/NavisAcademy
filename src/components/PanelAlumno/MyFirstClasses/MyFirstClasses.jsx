import React, { useState } from 'react';
import { UserUpdates } from '../../../Context/UserUpdatesContext';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import './MyFirstClasses.css';
import { useNavigate } from 'react-router-dom';
import BuyClasses from '../BuyClasses/BuyClasses';
import ProgramClasses from './ProgramClasses/ProgramClasses';

const MyFirstClasses = () => {

  const { user } = UserUpdates();
  const navigate = useNavigate();
  const userData = user.form;

  const handleSelection = async (duration) => {

    try {

      const firestore = getFirestore();
      const userRef = doc(firestore, `Users/${user.uid}`);
      await updateDoc(userRef, {
          durationClass: duration,
      });
      navigate('/Panel');

    } catch (e) {
      swal("UPS!", `${e.message}`, "error");
    }

    console.log(duration);

  }

  return (
    <div className='MyFirstClasses__container'>
      { userData.remainingClases > 0 ? 
        <div>
          <ProgramClasses />
        </div> 
        
        : 
        
        <div>
          { userData.durationClass === 0 ? 
            <div>
              <div className='MyfirstClasses__welcome'>
                <h5>Bienvenido a NAVIS</h5>
                <p>Para empezar debes adquirir tu primer paquete de clases</p>
                <p>Pero antes debes elegir entre clases de 30min o 50min</p>
              </div>

              <div className='cards__container'>

                <div className="buy-card">
                  <ul>
                    <li className="amount">Clases de 30min </li>
                    <div>
                      <button className="button__Card" onClick={() => handleSelection(30)}>
                        SLECCIONAR
                      </button>
                    </div>
                  </ul>
                </div>

                <div className="buy-card">
                  <ul>
                    <li className="amount">Clases de 50min </li>
                    <div>
                      <button className="button__Card" onClick={() => handleSelection(50)}>
                        SLECCIONAR
                      </button>
                    </div>
                  </ul>
                </div>

              </div>

            </div>

            :

            <div>
              <div className='MyfirstClasses__welcome'>
                <h5>Bienvenido a NAVIS</h5>
                <p>Adquiere tu primer paquete de clases</p>
              </div>
              <BuyClasses duration={userData.durationClass} />
            </div>
          }
        </div>

      }
      
    </div>
      
  )
}

export default MyFirstClasses

