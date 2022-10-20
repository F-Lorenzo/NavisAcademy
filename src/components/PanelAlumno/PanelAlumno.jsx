import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import LuxonTIme from "./LuxonTIme";
import MyNextClass from "./MyNextClass/MyNextClass";
import MisClases from "./MisClases/MisClases";
import BuyClasses from "./BuyClasses/BuyClasses";
import RoadLog from "./RoadLog";
import "./MisClases/MisClases.css";

const PanelAlumno = () => {
  const { user } = UserAuth();
  const [allMyClasses, setAllMyClasses] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, `Users/${user.uid}/myClases`);
    getDocs(queryCollection).then((res) =>
      setAllMyClasses(
        res.docs.map((date) => ({
          id: date.id,
          ...date.data(),
        }))
      )
    );
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <MyNextClass myClasses={allMyClasses} />
          <MisClases {...user.misClases} />
        </div>
        <BuyClasses />

      </div>
    </>
  );
};

export default PanelAlumno;
