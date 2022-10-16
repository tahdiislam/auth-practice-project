import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const authContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Tahdi Islam'})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user, createUser}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;