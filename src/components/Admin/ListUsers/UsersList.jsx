import React from 'react'
import User from './User'

const UsersList = ({users=[]}) => {
    return (
        users.map( listUser => <User key={listUser.id} userData={listUser} /> )
    )
}

export default UsersList
