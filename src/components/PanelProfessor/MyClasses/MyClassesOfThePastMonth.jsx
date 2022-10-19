import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { UserAuth } from '../../../Context/AuthContext';


import { DateTime } from 'luxon';
import MyClasses from './AllMyClasses/MyClasses';


const MyClassesOfThePastMonth = () => {

  const { user } = UserAuth();
  const [ myClassesData, setMyClassesData ] = useState ([]);

  const now = DateTime.now();
  const actualDate = now.toFormat("kkkk-LL-dd");
  console.log(actualDate);
  
  useEffect( () => {

      const querydb = getFirestore();
      const queryCollection = collection (querydb, `Users/${user.uid}/myClases`);
      const queryFilter = query (queryCollection, where('date', '<', actualDate));
      getDocs(queryFilter)
      .then( res => setMyClassesData(
          res.docs.map(
              classes => ({
                  id: classes.id,
                  ...classes.data()
              })
          )
      ))

  }, [])
  
  return (
      <div>
          <h1>TEST FILTERS</h1>
          <MyClasses myClasses={myClassesData} />
      </div>
  )

}

export default MyClassesOfThePastMonth
