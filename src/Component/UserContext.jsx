import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const authContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google sing in 
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // sing out
    const logOut = () => {
        return signOut(auth);
    }
    // use useEffect to log in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {user, createUser, signIn, logOut, singInWithGoogle}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;