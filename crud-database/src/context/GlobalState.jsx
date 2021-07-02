import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

//Create Users
export function GlobalState({ children }) {   

    const [users, setUsers] = useState([
        {ID: 'Axmed', First: 'Cali', Last: 'Nasir', Email: '123', Phone: '123', Location: 'Haa', Hobby: 'Hee', Actions: 'Hii', key: Date.now()},
        {ID: 'Axmed', First: 'Cali', Last: 'Nasir', Email: '123', Phone: '123', Location: 'Haa', Hobby: 'Hee', Actions: 'Hii', key: Date.now()}
    ]);
    const [currentUser, setCurrentUser] = useState(
        {ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: '', key: Date.now()}
    );

    const [userClicked, setUserClicked] = useState(true);
    const [userKey, setUserKey] = useState();
    
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
    const handleDelete = (userKey) => {
        // alert(userKey);
        setUserClicked(false);
        const filteredUsers = users.filter(user => user.key !== userKey);
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

    //Show Modal
    const displayModal = (key) => {    
        // alert(key);
        setUserClicked(true);
        setUserKey(key);
        // alert(userClicked);
    }

    //Hide Modal
    const closeModal = () => {
        setUserClicked(false);
    }
 
    return (
        <div>
            <GlobalContext.Provider value={{
                users,
                currentUser,
                userClicked,
                userKey,
                updateUsers,
                updateCurrentUser,
                handleDelete,
                handleEdit,
                editUser,
                displayModal,
                closeModal
            }}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalState