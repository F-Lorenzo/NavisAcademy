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

    async function getAllData(uid) {
        const docuRef = doc(Firestore, `Users/${uid}`);
        const docuCifrada = await getDoc(docuRef);
        const infoFinal = docuCifrada.data();
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
            if (currentUser) {
                getAllData(currentUser.uid).then((user) => {
                    const userData = {
                        uid: currentUser.uid,
                        email: currentUser.email,
                        rol: user.rol,
                        form: user.form,
                    };
                    setUser(userData);
                })
            } 
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