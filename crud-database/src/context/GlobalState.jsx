import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

//Create Users
export function GlobalState({ children }) {   
    const [users, setUsers] = useState([
        {ID: '1', First: 'Jane', Last: 'Smith', Email: 'js@gmail.com', Phone: '503-555-5555', Location: 'Portland, Oregon', Hobby: 'Photography', Actions: ''},
        {ID: '2', First: 'Tristan', Last: 'Rodriguez', Email: 'tr@gmail.com', Phone: '201-555-5555', Location: 'New York, New York', Hobby: '', Actions: ''}
    ]);    

    const [currentUser, setCurrentUser] = useState(
        {ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: '', key: Date.now()}
    );
    
    //Update Current User
    const updateCurrentUser = (inputValue) => {
        // let currentID = users.length + 1;        
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
        const filtered = users.filter(user => user.key !== key);
        setUsers(filtered);
    
    }

    return (
        <div>
            <GlobalContext.Provider value={{
                users,
                updateUsers,
                currentUser,
                updateCurrentUser,
                handleDelete
            }}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalState
