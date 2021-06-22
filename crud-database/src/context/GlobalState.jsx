import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

//Create Users
export function GlobalState({ children }) {   
    const [users, setUsers] = useState([]);    

    const [currentUser, setCurrentUser] = useState(
        {ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: '', key: Date.now()}
    );
    
    //Update Current User
    const updateCurrentUser = (inputValue) => {
        setCurrentUser({
            ...currentUser,
            [inputValue.name]: inputValue.value
        });
    }

    //Update Users
    const updateUsers = () => {
        const newUser = currentUser;
        const newUsers = [...users, newUser];
        setUsers(newUsers);
        setCurrentUser({ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: '', key: Date.now()});
    }

    //Delete a User
    const handleDelete = (key) => {
        const filteredUsers = users.filter(user => user.key !== key);
        setUsers(filteredUsers);    
    }

    //Display User To Be Edited
    const handleEdit = (key) => {
        const toBeUpdatedUser = users.find(user => user.key === key);
        setCurrentUser(toBeUpdatedUser);
    }

    //Update Users By Reinserting Updated User
    const editUser = () => {
        const updatedUsers = users.map(user => currentUser.key === user.key ? currentUser : user);
        setUsers(updatedUsers);
        setCurrentUser({ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: '', key: Date.now()});
    }

    return (
        <div>
            <GlobalContext.Provider value={{
                users,
                currentUser,
                updateUsers,                
                updateCurrentUser,
                handleDelete,
                handleEdit,
                editUser
            }}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalState
