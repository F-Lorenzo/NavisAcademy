import { createContext, useContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContext";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const UserUpdatesContext = createContext();

export const UserUpdatesContextProvider = ({ children }) => {
  const firestore = getFirestore();
  const { userLogged } = UserAuth();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userLogged) {
      const unsubscribe = onSnapshot(
        doc(firestore, `Users/${userLogged.uid}`),
        (updData) => {
          const newData = updData.data();
          const userData = {
            uid: userLogged.uid,
            email: userLogged.email,
            role: newData.role,
            form: newData,
            misClases: {
              remainingClases: newData.remainingClases,
              completedClases: newData.completedClases,
              absentedClases: newData.absentedClases,
              teacher: newData.teacher,
            },
          };
          setUser(userData);
        }
      );
      return () => {
        unsubscribe();
      };
    } else {
        setUser({});
    }
  }, [userLogged]);

  return (
    <UserUpdatesContext.Provider value={{ user }}>
      {children}
    </UserUpdatesContext.Provider>
  );
};

export const UserUpdates = () => {
  return useContext(UserUpdatesContext);
};
