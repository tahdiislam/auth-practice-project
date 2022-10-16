import React, { createContext } from 'react';

export const authContext = createContext()

const UserContext = ({children}) => {
    const user = {displayName: 'Tahdi Islam'}
    const authInfo = {user: user}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;