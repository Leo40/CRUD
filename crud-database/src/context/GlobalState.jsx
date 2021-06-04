import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalState({ children }) {
    const [users, setUsers] = useState([
        {ID: '1', First: 'Jane', Last: 'Smith', Email: 'js@gmail.com', Phone: '503-555-5555', Location: 'Portland, Oregon', Hobby: 'Photography', Actions: ''},
        {ID: '2', First: 'Tristan', Last: 'Rodriguez', Email: 'tr@gmail.com', Phone: '201-555-5555', Location: 'New York, New York', Hobby: '', Actions: ''}
    ]);

    const [currentUser, setCurrentUser] = useState(
        {ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: ''}
    );

    const updateUser = () => {
        // alert(currentUser.First);
        const newUser = currentUser;

        const newUsers = [...users, newUser];
        setUsers(newUsers);
        setCurrentUser({ID: '', First: '', Last: '', Email: '', Phone: '', Location: '', Hobby: '', Actions: ''});
    }

    const updateCurrentUser = (inputValue) => {
        setCurrentUser({[inputValue.name]: inputValue.value});
    }

    return (
        <div>
            <GlobalContext.Provider value={{
                users,
                updateUser,
                currentUser,
                updateCurrentUser
            }}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export default GlobalState
