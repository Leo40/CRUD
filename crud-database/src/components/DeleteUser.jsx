import React from 'react';
import { useGlobalContext } from '../context/GlobalState';

function DeleteUser() {
    const globalContext = useGlobalContext();
    const {
        updateUsers,
        currentUser,
        updateCurrentUser,
    } = globalContext;

    return (
        <div>
            Delete User
        </div>
    )
}

export default DeleteUser
