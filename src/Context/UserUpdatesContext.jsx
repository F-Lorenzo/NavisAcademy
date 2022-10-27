import { createContext, useContext, useEffect, useState } from 'react'
import { UserAuth } from './AuthContext';
import { getFirestore, doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

const UserUpdatesContext = createContext();

export const UserUpdatesContextProvider = ({children}) => {

    const Firestore = getFirestore();
    const { userLogged } = UserAuth();
    const [ user, setUser ] = useState({});

    useEffect(() => {
        if (userLogged) {
            const unsubscribe = onSnapshot(doc(Firestore, `Users/${userLogged.uid}`), (updData) => {
                const newData = updData.data();
                const userData = {
                    uid: userLogged.uid,
                    email: userLogged.email,
                    role: newData.role,
                    form: newData,
                    misClases: { 
                                    remainingClases: newData.remainingClases,
                                    completedClases: newData.completedClases,
                                    programedClases: newData.programedClases,
                               }
                };
                setUser(userData);
            });
            return () => {
                unsubscribe();
            }
        }
    }, [userLogged])

    return (
        <UserUpdatesContext.Provider value={{user}}>
            {children}
        </UserUpdatesContext.Provider>
    )
}

export const UserUpdates = () => {
    return useContext(UserUpdatesContext)
}
