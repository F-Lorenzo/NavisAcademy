import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth';


import { getFirestore, doc, getDoc } from "firebase/firestore";


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    /* ROL SHIT */

    const Firestore = getFirestore();

    async function getRol(uid) {
        const docuRef = doc(Firestore, `Users/${uid}`);
        const docuCifrada = await getDoc(docuRef);
        const infoFinal = docuCifrada.data().rol;
        return infoFinal;
    }
    
    /*------------------------*/

    const [ user, setUser ] = useState({});

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
            getRol(currentUser.uid).then((rol) => {
                const userData = {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    rol: rol,
                };
                setUser(userData);
            })

        });
        return () => {
            unsubscribe();
        };
    },[])

    return (
        <UserContext.Provider value={{ createUser, user, logOut, signIn }}>
            {children}
        </UserContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(UserContext);
}