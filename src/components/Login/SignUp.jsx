import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { DateTime } from 'luxon';
import { addDoc, setDoc, collection, getFirestore, doc, query, getDocs, serverTimestamp } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import cohete from '../../assets/img/cohete.svg';
import { FormItems } from './FormItems';
import CountryDropdown from './CountryDropdown/CountryDropdown';
import './SignIn.scss';


const Signup = () => {
    
    const [ form, setForm ] = useState({});
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate();
    const timeStampLuxon = (DateTime.now()).toFormat("DDDD - HH:mm:ss"); 
    const timeStamp = serverTimestamp();

    const [ country, setCountry ] = useState();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleCountry = (select) => {
        setCountry(select)
    }

    const studentData = {
        role: "alumn",
        remainingClases: 0,
        completedClases: 0,
        absentedClases: 0,
        actualClass: 0,
        newPurchasedClasses: 0,
        totalClasses: 0,
        teacher: "unasigned",
        newNotifications: true,
        notifications: 1,
        newbie: true,
        durationClass: 0,
        linkToClass: "",
    }

    const welcomeNotification = {
        textNotification: "Bienvenido a Navis!",
        notificationType: "Welcome",
        checked: false,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoader(true);
        try {
            const infoUser = await createUser(form.email, form.password).then((firebaseData) => {
                return firebaseData;
            });
            console.log(infoUser); // BORRAR ESTA SHIT!!
            const firestore = getFirestore();
            const docuRef = doc(firestore, `Users/${infoUser.user.uid}`);
            setDoc(docuRef, {...form, country, ...studentData, uid:infoUser.user.uid});

            const notifications =  collection(firestore, `Users/${infoUser.user.uid}/myNotifications`);
            addDoc(notifications, {...welcomeNotification, timeStamp});

            navigate('/account');
        } catch (e) {
            setError(e.message);
            swal("UPS!", `${e.message}`, "error");
            setLoader(false);
        }
    };
  

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="signIn__main-container">
        <div className="signIn__container">

          <form className='signUp__form' onSubmit={handleSubmit}>

            {FormItems.map((item, index) => {
              return (
              <div key={index}>
                <label htmlFor={item.inNameId}>
                  {item.field} : 
                </label>
                <input 
                  type={item.inType} 
                  id={item.inNameId} 
                  name={item.inNameId} 
                  value={form[item.inNameId] || ''} 
                  onChange={handleChange} 
                />
              </div>
              )
            })}

            <CountryDropdown selected={handleCountry}/>

            <button type="submit">
              Crear Cuenta
            </button>
          </form>

          <div>

            <div className='signIn__tittleColumn'>
                <p className='signIn-logo'>
                    <img className='cohete-navis' src={cohete} alt="cohete.svg" />
                    <i className="fa-solid fa-user"></i>
                </p>
                <p className='signIn-tittle'>
                    SignUp
                </p>
            </div>

            <p className='subTittle'>
                ¿Ya tienes una cuenta?
                <Link to='/signIn'>
                    Inicia sesión.
                </Link>
            </p>

          </div>

        </div>
      </div>
    </>
  );
};

export default Signup;
