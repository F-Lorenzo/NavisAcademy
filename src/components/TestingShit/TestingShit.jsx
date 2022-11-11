import React from 'react'
import { Firestore, addDoc, doc, setDoc, updateDoc, getFirestore, collection } from 'firebase/firestore';
import { DateTime } from 'luxon';


const TestingShit = () => {



    const actualDate = DateTime.now();

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const firestore = getFirestore();
            const docPath = collection(firestore, `DateTestCollection/`);
            addDoc(docPath, { actualDate });
        } catch (e) {
            console.log(e.message);
        }

    }

    const handleTest = () => {
        console.log("TEST");
        console.log(actualDate);
        console.log();



    }

    return (
        <div>

            <h1>DATE SHIT</h1>
    
            <button onClick={handleTest}>TEST</button>

            <button onClick={handleSend}>SEND TO FIREBASE</button>
      
        </div>
    )

}

export default TestingShit
