import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth';


import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";


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

    async function getAllClasses(uid) {
        const queryRef = collection(Firestore, `Users/${uid}/myClases`);
        const queryCifrada = await getDocs(queryRef);
        const queryFinal = queryCifrada.data();
        return queryFinal;
    }
    
    /*------------------------*/

    const [ user, setUser ] = useState({});
    const [ allMyClasses, setAllMyClasses ] = useState([]);

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
            setUser(currentUser);
            /* ----- ROL SHIT ------ */
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
                    setUser(userData);
                })
            } 
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, logOut, signIn }}>
            {children}
        </UserContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(UserContext);
}