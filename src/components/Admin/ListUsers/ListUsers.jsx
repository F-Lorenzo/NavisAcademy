import React, { useEffect, useState} from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Loader from '../../Loader/Loader'
import UsersList from './UsersList';

const ListUsers = ({roleNeeded}) => {

    const firebase = getFirestore();
    const [ loader, setLoader ] = useState(true);
    const [ users, setUsers ] = useState([]);

    useEffect( () => {

        const usersCollection = collection(firebase, `Users`);
        const usersNeeded = query(usersCollection, where('role', '==', `${roleNeeded}`));
        getDocs(usersNeeded)
        .then ( res => setUsers(
            res.docs.map(
                user => ({
                    ...user.data()
                })
            )
        ))

        setLoader(false);
    }, [])

    const handleTest = () => {
        console.log(users);
    }

    return (
        <>
        { loader ? <Loader /> :
            <div>
                {/*
                <button onClick={handleTest}>
                    TEST
                </button>
                */}
                
                <UsersList users={users} />
            
            </div>
        }
        </>
    )
}

export default ListUsers
