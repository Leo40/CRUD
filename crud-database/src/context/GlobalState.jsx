import React, { createContext, useContext, useState } from 'react';

const UsersContext = createContext();
const SetUsersContext = createContext();
const CurrentUserContext = createContext();
const SetCurrentUserContext = createContext();

export function ForUsersContext() {
    return useContext(UsersContext);
}

export function ForSetUsersContext() {
    return useContext(SetUsersContext);
}

export function ForCurrentUserContext() {
    return useContext(CurrentUserContext);
}

export function ForSetCurrentUserContext() {
    return useContext(SetCurrentUserContext);
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
            <UsersContext.Provider value={users}>
                <SetUsersContext.Provider value={updateUser}>
                    <CurrentUserContext.Provider value={currentUser}>
                        <SetCurrentUserContext.Provider value={updateCurrentUser}>
                            {children}
                        </SetCurrentUserContext.Provider>
                    </CurrentUserContext.Provider>
                </SetUsersContext.Provider>
            </UsersContext.Provider>
            
        </div>
    )
}

export default GlobalState
