import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth';


import { getFirestore, doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore";


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    /* ROL SHIT */

    const Firestore = getFirestore();

    async function getAllData(uid) {
        const docuRef = doc(Firestore, `Users/${uid}`);
        const docuCifrada = await getDoc(docuRef);
        const infoFinal = docuCifrada.data();
        return infoFinal;
    }
    
    /*------------------------*/

    const [ userLogged, setUserLogged ] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = ( email, password ) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserLogged(currentUser);
            /* ----- ROL SHIT ------ */

            /*
            if (currentUser) {
                getAllData(currentUser.uid).then((user) => {
                    const userData = {
                        uid: currentUser.uid,
                        email: currentUser.email,
                        role: user.role,
                        form: user,
                        misClases: { 
                                        remainingClases: user.remainingClases,
                                        completedClases: user.completedClases,
                                        programedClases: user.programedClases,
                                   }
                    };
                    setUserLogged(userData);
                })
            }
            */
            
            
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return (
        <UserContext.Provider value={{ createUser, userLogged, logOut, signIn }}>
            {children}
        </UserContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(UserContext);
}