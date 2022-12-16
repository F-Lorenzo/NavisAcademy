import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { UserUpdates } from "../../Context/UserUpdatesContext";
import LuxonTIme from "./LuxonTIme";
import MyNextClass from "./MyNextClass/MyNextClass";
import MisClases from "./MisClases/MisClases";
import BuyClasses from "./BuyClasses/BuyClasses";
import Loader from "../Loader/Loader";

import "./MisClases/MisClases.css";

const PanelAlumno = () => {

  const { user } = UserUpdates();
  const [ allMyClasses, setAllMyClasses ] = useState([]);
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, `Users/${user.uid}/mySchedule`);
    getDocs(queryCollection)
    .then((res) =>
      {

        const mySchedule = res.docs.map(date => ({ ...date.data()}));
        const arrayOfClasses = [];        
        mySchedule.forEach( allMyDates => 
          Object.keys(allMyDates).forEach(key => arrayOfClasses.push({

              condition: allMyDates[key].condition,
              date: allMyDates[key].date,
              time: allMyDates[key].time,
              day: allMyDates[key].day,
          }))
        );

        setAllMyClasses(arrayOfClasses);
        setLoader(false);

      }
    );
  }, []);

  const handleTest = () => {

    console.log(allMyClasses);

  }
  
  if (loader) {
    return 
  }

  return (
    <>
      <div>
        <button onClick={handleTest}>TEST</button>
        {/*
        */}

        <div className="container">
          { 
            user.form.teacher === "assigned" ? 
            <MyNextClass myClasses={allMyClasses} /> 
            : "" 
          }
            <MisClases {...user.misClases} />
        </div>

        <BuyClasses />

      </div>
    </>
  );
};

export default PanelAlumno;
