import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";

import { UserAuth } from "../../../Context/AuthContext";
import Class from "./Class";

const CalendarioDeClases = () => {
  const { user } = UserAuth();
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, `Users/${user.uid}/myClases`);
    getDocs(queryCollection).then((res) =>
      setCalendar(
        res.docs.map((date) => ({
          id: date.id,
          ...date.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="form__Register">
      <h1>CALENDARIO DE CLASES</h1>
      <Class classDate={calendar} />
    </div>
  );
};

export default CalendarioDeClases;
